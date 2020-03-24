import React, { useState } from 'react';
import { compose } from 'recompose';
import { withTheme } from 'styled-components';
import { defaultProps } from '../../default-props';
import { normalizeColor } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { withForwardRef } from '../hocs';
import { Text } from '../Text';
import { StyledTab } from './StyledTab';
import { ButtonIntrinsicProps } from '../intrinsic-elements';
import useTheme from '../Theme/useTheme';

export interface TabProps extends Omit<ButtonIntrinsicProps, 'title'> {
  active?: any;
  forwardRef?: any;
  plain?: boolean;
  onActivate?: any;
  title?: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({
  active,
  forwardRef,
  plain,
  title,
  onActivate,
  onMouseOver,
  onMouseOut,
  ...rest
}) => {
  const [over, setOver] = useState<any>(undefined);
  let normalizedTitle = title;
  const tabStyles: any = {};
  const theme = useTheme();

  const onMouseOverTab = event => {
    setOver(true);
    if (onMouseOver) {
      onMouseOver(event);
    }
  };

  const onMouseOutTab = event => {
    setOver(undefined);
    if (onMouseOut) {
      onMouseOut(event);
    }
  };

  const onClickTab = event => {
    if (event) {
      event.preventDefault();
    }
    onActivate();
  };

  if (!plain) {
    if (typeof title !== 'string') {
      normalizedTitle = title;
    } else if (active) {
      normalizedTitle = <Text {...theme.tab.active}>{title}</Text>;
    } else {
      normalizedTitle = (
        <Text color={over ? theme?.tab?.hover?.color : theme.tab.color}>
          {title}
        </Text>
      );
    }

    if (theme.tab.border) {
      let borderColor =
        theme.tab.border.color || theme.global.control.border.color;
      if (active) {
        borderColor = theme.tab.border.active.color || borderColor;
      } else if (over) {
        borderColor = theme.tab.border.hover.color || borderColor;
      }
      borderColor = normalizeColor(borderColor, theme);

      tabStyles.border = {
        side: theme.tab.border.side,
        size: theme.tab.border.size,
        color: borderColor,
      };
    }

    tabStyles.background = active
      ? theme.tab.active.background || theme.tab.background
      : theme.tab.background;
    tabStyles.pad = theme.tab.pad;
    tabStyles.margin = theme.tab.margin;
  }

  return (
    <Button
      ref={forwardRef}
      plain
      role="tab"
      aria-selected={active}
      aria-expanded={active}
      {...rest}
      onClick={onClickTab}
      onMouseOver={onMouseOverTab}
      onMouseOut={onMouseOutTab}
      onFocus={onMouseOver}
      onBlur={onMouseOut}
    >
      <StyledTab as={Box} plain={plain} {...tabStyles}>
        {normalizedTitle}
      </StyledTab>
    </Button>
  );
};

Tab.defaultProps = {};
Object.setPrototypeOf(Tab.defaultProps, defaultProps);

let TabDoc;
if (process.env.NODE_ENV !== 'production') {
  TabDoc = require('./doc').doc(Tab); // eslint-disable-line global-require
}
const TabWrapper = compose(withTheme, withForwardRef)(TabDoc || Tab);

export { TabWrapper as Tab };
