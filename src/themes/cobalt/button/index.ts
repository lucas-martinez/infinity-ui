import { css } from 'styled-components';
import { PartialThemeGenerator } from '..';
import { ButtonProps } from '../../../js/components/Button';
import pick from '../../pick';
import spec from '../quantum-spec';
import buttonStyle from './base/button';
import { defaultStyling, primaryStyling } from './base/styling';

export { default as button } from './base/button';

export const buttonDivider = {
  left: spec.global.buttonDivider.left,
  height: spec.global.buttonDivider.height,
  top: spec.global.buttonDivider.top,
  width: spec.global.buttonDivider.width,
};

const extend = css<ButtonProps>`
  box-shadow: ${pick(buttonStyle.boxShadow)};
  letter-spacing: ${buttonStyle.letterSpacing};
  line-height: ${buttonStyle.lineHeight};
  font-size: ${buttonStyle.fontSize};
  font-weight: ${buttonStyle.fontWeight};
  min-height: ${buttonStyle.height};
  text-transform: ${buttonStyle.textTransform};

  ${props => !props.primary && !props.plain && defaultStyling(props)}
  ${props => props.primary && !props.plain && primaryStyling(props)}
`;

export type ButtonTheme = typeof buttonStyle;

const generator: PartialThemeGenerator<'button'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    button: {
      border: {
        radius: buttonStyle.borderRadius,
        width: buttonStyle.borderWidth,
      },
      extend,
    },
  };
};

export default generator;
