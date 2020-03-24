import React, { useState } from 'react';
import PropTypes from 'react-desc/lib/PropTypes';
import { compose } from 'recompose';
import styled, { withTheme } from 'styled-components';
import { defaultProps } from '../../default-props';
import {
  A11yTitleType,
  AlignSelfType,
  GridAreaType,
  JustifyContentType,
  MarginType,
  normalizeColor,
} from '../../utils';
import { Box } from '../Box';
import { Button, ButtonProps } from '../Button';
import { DropButton } from '../DropButton';
import { withForwardRef } from '../hocs';
import { Keyboard } from '../Keyboard';
import { Text } from '../Text';
import useTheme from '../Theme/useTheme';
import { DropProps } from '../Drop/Drop';

const ContainerBox = styled(Box)`
  max-height: inherit;

  /* IE11 hack to get drop contents to not overflow */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: 100%;
  }

  ${props => props.theme.menu.extend};
`;

export interface MenuProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  disabled?: boolean;
  dropAlign?: {
    top?: 'top' | 'bottom';
    bottom?: 'top' | 'bottom';
    left?: 'right' | 'left';
    right?: 'right' | 'left';
  };
  dropBackground?:
    | string
    | {
        color?: string;
        opacity?: 'weak' | 'medium' | 'strong' | boolean | number;
      };
  dropTarget?: object;
  dropProps?: DropProps;
  gridArea?: GridAreaType;
  icon?: boolean | React.ReactNode;
  items: Record<string, any>[];
  justifyContent?: JustifyContentType;
  label?: string | React.ReactNode;
  margin?: MarginType;
  messages?: { closeMenu?: string; openMenu?: string };
  open?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | string;
}

const Menu: React.FC<MenuProps & Omit<ButtonProps, 'icon'> & { forwardRef: React.RefObject<HTMLDivElement> }> = props => {
  const {
    a11yTitle,
    children,
    disabled,
    dropAlign,
    dropBackground,
    dropProps,
    dropTarget,
    forwardRef,
    justifyContent,
    icon,
    items,
    label,
    messages,
    onKeyDown,
    open,
    plain,
    size,
    ...rest
  } = props;
  const theme = useTheme();
  const MenuIcon = theme.menu.icons.down;
  const iconColor = normalizeColor('control', theme);
  const align = dropProps?.align || dropAlign;
  let controlButtonIndex;
  if (align?.top === 'top') {
    controlButtonIndex = -1;
  } else if (align?.bottom === 'bottom') {
    controlButtonIndex = items.length;
  } else {
    controlButtonIndex = undefined;
  }
  const buttonRefs = {};
  const constants = {
    none: 'none',
    tab: 9,
    // Menu control button included on top of menu items
    controlTop: align?.top === 'top' || undefined,
    // Menu control button included on the bottom of menu items
    controlBottom: align?.bottom === 'bottom' || undefined,
    controlButtonIndex,
  };

  const [activeItemIndex, setActiveItemIndex] = useState<any>(constants.none);
  const [isOpen, setOpen] = useState<any>(open || false);

  const onDropClose = () => {
    setActiveItemIndex(constants.none);
    setOpen(false);
  };

  const onDropOpen = () => {
    setOpen(true);
  };

  const onSelectMenuItem = event => {
    if (isOpen) {
      if (activeItemIndex >= 0) {
        event.preventDefault();
        event.stopPropagation();
        buttonRefs[activeItemIndex].click();
      }
    } else {
      onDropOpen();
    }
  };

  const isTab = event =>
    event.keyCode === constants.tab || event.which === constants.tab;

  const onNextMenuItem = event => {
    event.preventDefault();
    if (!isOpen) {
      onDropOpen();
    } else if (
      isTab(event) &&
      ((!constants.controlBottom && activeItemIndex === items.length - 1) ||
        (constants.controlBottom && activeItemIndex === controlButtonIndex))
    ) {
      // User has reached end of the menu, this tab will close
      // the menu drop because there are no more "next items" to access
      onDropClose();
    } else {
      let index;
      if (
        // This checks if the user has reached the end of the menu.
        // In the case the the menu control button is located at the
        // bottom of the menu, it checks if the user has reached the button.
        // Otherwise, it checks if the user is at the last menu item.
        (constants.controlBottom && activeItemIndex === controlButtonIndex) ||
        (!constants.controlBottom && activeItemIndex === items.length - 1) ||
        activeItemIndex === constants.none
      ) {
        // place focus on the first menu item
        index = 0;
      } else {
        index = activeItemIndex + 1;
      }
      setActiveItemIndex(index);
      buttonRefs[index].focus();
    }
  };

  const onPreviousMenuItem = event => {
    event.preventDefault();
    if (!isOpen) {
      onDropOpen();
    } else if (
      isTab(event) &&
      ((constants.controlTop && activeItemIndex === controlButtonIndex) ||
        (!constants.controlTop && activeItemIndex - 1 < 0))
    ) {
      // User has reached beginning of the menu, this tab will close
      // the menu drop because there are no more "previous items" to access
      onDropClose();
    } else {
      let index;
      if (activeItemIndex - 1 < 0) {
        if (
          constants.controlTop &&
          activeItemIndex - 1 === controlButtonIndex
        ) {
          index = items.length;
        } else {
          index = items.length - 1;
        }
      } else {
        index = activeItemIndex - 1;
      }
      setActiveItemIndex(index);
      buttonRefs[index].focus();
    }
  };

  const content = children || (
    <Box
      direction="row"
      justify={justifyContent}
      align="center"
      pad="small"
      gap={label && icon !== false ? 'small' : undefined}
    >
      <Text size={size}>{label}</Text>
      {icon !== false
        ? (icon !== true && icon) || <MenuIcon color={iconColor} size={size} />
        : null}
    </Box>
  );

  const controlMirror = (
    <Box flex={false}>
      <Button
        ref={r => {
          // make it accessible at the end of all menu items
          buttonRefs[items.length] = r;
        }}
        a11yTitle={a11yTitle || messages?.closeMenu || 'Close Menu'}
        active={activeItemIndex === controlButtonIndex}
        focusIndicator={false}
        hoverIndicator="background"
        plain={plain}
        onClick={onDropClose}
        onFocus={() => setActiveItemIndex(controlButtonIndex)}
        // On first tab into menu, the control button should not
        // be able to receive tab focus because the focus should
        // go to the first menu item instead.
        tabIndex={activeItemIndex === constants.none ? '-1' : undefined}
      >
        {typeof content === 'function'
          ? () => content({ ...props, drop: true })
          : content}
      </Button>
    </Box>
  );

  return (
    <Keyboard
      onDown={onNextMenuItem}
      onUp={onPreviousMenuItem}
      onEnter={onSelectMenuItem}
      onSpace={onSelectMenuItem}
      onEsc={onDropClose}
      onTab={onDropClose}
      onKeyDown={onKeyDown}
    >
      <DropButton
        ref={forwardRef}
        {...rest}
        a11yTitle={a11yTitle || messages?.openMenu || 'Open Menu'}
        disabled={disabled}
        dropAlign={align}
        dropTarget={dropTarget}
        plain={plain}
        open={isOpen}
        onOpen={onDropOpen}
        onClose={onDropClose}
        dropContent={
          <Keyboard
            onTab={event =>
              event.shiftKey ? onPreviousMenuItem(event) : onNextMenuItem(event)
            }
            onEnter={onSelectMenuItem}
          >
            <ContainerBox background={dropBackground || theme.menu.background}>
              {align?.top === 'top' ? controlMirror : undefined}
              <Box overflow="auto">
                {items.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Box key={index} flex={false}>
                    <Button
                      ref={r => {
                        buttonRefs[index] = r;
                      }}
                      onFocus={() => setActiveItemIndex(index)}
                      active={activeItemIndex === index}
                      hoverIndicator="background"
                      focusIndicator={false}
                      {...{ ...item, icon: undefined, label: undefined }}
                      onClick={(...args) => {
                        if (item.onClick) {
                          item.onClick(...args);
                        }
                        if (item.close !== false) {
                          onDropClose();
                        }
                      }}
                    >
                      <Box
                        align="start"
                        pad="small"
                        direction="row"
                        gap={item.gap}
                      >
                        {item.reverse && item.label}
                        {item.icon}
                        {!item.reverse && item.label}
                      </Box>
                    </Button>
                  </Box>
                ))}
              </Box>
              {align?.bottom === 'bottom' ? controlMirror : undefined}
            </ContainerBox>
          </Keyboard>
        }
      >
        {content}
      </DropButton>
    </Keyboard>
  );
};

Menu.propTypes = {
  dropAlign: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  dropProps: PropTypes.shape({}),
  items: PropTypes.arrayOf({}),
  messages: PropTypes.shape({
    openMenu: PropTypes.string,
    closeMenu: PropTypes.string,
  }),
  justifyContent: PropTypes.string,
};

Menu.defaultProps = {
  dropAlign: {
    top: 'top',
    left: 'left',
  },
  dropProps: {},
  items: [],
  messages: {
    openMenu: 'Open Menu',
    closeMenu: 'Close Menu',
  },
  justifyContent: 'start',
};

Menu.displayName = 'Menu';

Object.setPrototypeOf(Menu.defaultProps, defaultProps);

let MenuDoc;
if (process.env.NODE_ENV !== 'production') {
  MenuDoc = require('./doc').doc(Menu); // eslint-disable-line global-require
}
const MenuWrapper = compose(withTheme, withForwardRef)(MenuDoc || Menu);

export { MenuWrapper as Menu };
