import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Button, ButtonProps } from '../../js/components/Button';
import { ExtendedTheme } from '../../themes/cobalt';
import {
  ACCENT,
  ButtonColor,
  CRITICAL,
  DEFAULT,
  PRIMARY,
  SECONDARY,
  SUCCESS,
} from '../../themes/cobalt/button/base/styling';
import {
  accentStyling,
  criticalStyling,
  defaultStyling,
  primaryStyling,
  secondaryStyling,
  successStyling,
} from '../../themes/cobalt/button/flat/styling';

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

export interface FlatButtonProps extends ButtonProps {
  color?: ButtonColor;
}

const FlatButton = React.memo(
  ({ color: variant, ...props }: FlatButtonProps): JSX.Element => {
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

export default FlatButton;
