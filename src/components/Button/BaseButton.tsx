import React from './node_modules/react';
import styled, { ThemeProps } from './node_modules/styled-components';
import { Button, ButtonProps } from '../../js/components/Button';
import { ExtendedTheme } from '../../themes/cobalt';
import {
  ACCENT,
  accentStyling,
  ButtonColor,
  CRITICAL,
  criticalStyling,
  DEFAULT,
  defaultStyling,
  PRIMARY,
  primaryStyling,
  SECONDARY,
  secondaryStyling,
  SUCCESS,
  successStyling,
} from '../../themes/cobalt/button/base/styling';

type ButtonThemedProps = ButtonProps &
  ThemeProps<Pick<ExtendedTheme, 'button'>>;

const StyledAccentButton = styled<React.ComponentType<ButtonThemedProps>>(
  Button,
)`
  ${props => accentStyling(props)}
`;

const StyledCriticalButton = styled<React.ComponentType<ButtonThemedProps>>(
  Button,
)`
  ${props => criticalStyling(props)}
`;

const StyledDefaultButton = styled<React.ComponentType<ButtonThemedProps>>(
  Button,
)`
  ${props => defaultStyling(props)}
`;

const StyledPrimaryButton = styled<React.ComponentType<ButtonThemedProps>>(
  Button,
)`
  ${props => primaryStyling(props)}
`;

const StyledSecondaryButton = styled<React.ComponentType<ButtonThemedProps>>(
  Button,
)`
  ${props => secondaryStyling(props)}
`;

const StyledSuccessButton = styled<React.ComponentType<ButtonThemedProps>>(
  Button,
)`
  ${props => successStyling(props)}
`;

export interface BaseButtonProps extends ButtonProps {
  color?: ButtonColor;
}

const BaseButton = React.memo(
  ({ color: variant, ...props }: BaseButtonProps): JSX.Element => {
    switch (variant) {
      case ACCENT:
        return <StyledAccentButton {...props} />;
      case CRITICAL:
        return <StyledCriticalButton {...props} />;
      case PRIMARY:
        return <StyledPrimaryButton {...props} />;
      case SECONDARY:
        return <StyledSecondaryButton {...props} />;
      case SUCCESS:
        return <StyledSuccessButton {...props} />;
      case DEFAULT:
      default:
        return <StyledDefaultButton {...props} />;
    }
  },
);

export default BaseButton;
