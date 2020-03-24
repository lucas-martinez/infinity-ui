import React, {
  Children,
  cloneElement,
  forwardRef,
  useContext,
  useState,
} from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import {
  A11yTitleType,
  AlignSelfType,
  BackgroundType,
  colorIsDark,
  ColorType,
  FillType,
  GapType,
  GridAreaType,
  MarginType,
  normalizeBackground,
  normalizeColor,
  PolymorphicType,
} from '../../utils';
import { Box } from '../Box';
import { ButtonIntrinsicProps } from '../intrinsic-elements';
import { StyledButton } from './StyledButton';

export interface ButtonProps extends ButtonIntrinsicProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  gridArea?: GridAreaType;
  margin?: MarginType;
  active?: boolean;
  color?: ColorType;
  disabled?: boolean;
  fill?: FillType;
  focusIndicator?: boolean;
  gap?: GapType;
  hoverIndicator?: BackgroundType | boolean;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  icon?: JSX.Element;
  label?: React.ReactNode;
  plain?: boolean;
  primary?: boolean;
  reverse?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'reset' | 'submit';
  as?: PolymorphicType;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      a11yTitle,
      color, // munged to avoid styled-components putting it in the DOM
      children,
      disabled,
      icon,
      focusIndicator = true,
      gap = 'small',
      fill, // munged to avoid styled-components putting it in the DOM
      href,
      label,
      onBlur,
      onClick,
      onFocus,
      onMouseOut,
      onMouseOver,
      plain,
      primary,
      reverse,
      size,
      type = 'button',
      as,
      ...rest
    },
    ref,
  ) => {
    const theme = useContext(ThemeContext) || defaultProps.theme;
    const [focus, setFocus] = useState<boolean>();

    if ((icon || label) && children) {
      console.warn(
        'Button should not have children if icon or label is provided',
      );
    }

    const isDarkBackground = () => {
      const backgroundColor = normalizeBackground(
        normalizeColor(
          color ||
            theme.button.primary.color ||
            theme.global.colors.control ||
            'brand',
          theme,
        ),
        theme,
      );

      return colorIsDark(backgroundColor);
    };

    const [hover, setHover] = useState<any>(false);

    const onMouseOverButton = event => {
      setHover(true);
      if (onMouseOver) {
        onMouseOver(event);
      }
    };

    const onMouseOutButton = event => {
      setHover(false);
      if (onMouseOut) {
        onMouseOut(event);
      }
    };

    let buttonIcon = icon;
    // only change color if user did not specify the color themselves...
    if (primary && icon && !icon.props.color) {
      buttonIcon = cloneElement(icon, {
        color: theme.global.colors.text[isDarkBackground() ? 'dark' : 'light'],
      });
    }

    const domTag = !as && href ? 'a' : as;
    const first = reverse ? label : buttonIcon;
    const second = reverse ? buttonIcon : label;

    let contents;
    if (first && second) {
      contents = (
        <Box direction="row" align="center" justify="center" gap={gap}>
          {first}
          {second}
        </Box>
      );
    } else if (typeof children === 'function') {
      contents = children({ hover, focus });
    } else {
      contents = first || second || children;
    }
    return (
      <StyledButton
        {...rest}
        as={domTag}
        ref={ref}
        aria-label={a11yTitle}
        colorValue={color}
        disabled={disabled}
        hasIcon={!!icon}
        gap={gap}
        hasLabel={!!label}
        fillContainer={fill}
        focus={focus}
        focusIndicator={focusIndicator}
        href={href}
        onClick={onClick}
        onFocus={event => {
          setFocus(true);
          if (onFocus) onFocus(event);
        }}
        onBlur={event => {
          setFocus(false);
          if (onBlur) onBlur(event);
        }}
        onMouseOver={onMouseOverButton}
        onMouseOut={onMouseOutButton}
        pad={!plain}
        plain={
          typeof plain !== 'undefined'
            ? plain
            : Children.count(children) > 0 || (icon && !label)
        }
        primary={primary}
        sizeProp={size}
        type={!href ? type : undefined}
      >
        {contents}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

let ButtonDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  ButtonDoc = require('./doc').doc(Button);
}
const ButtonWrapper = ButtonDoc || Button;

export { ButtonWrapper as Button };
