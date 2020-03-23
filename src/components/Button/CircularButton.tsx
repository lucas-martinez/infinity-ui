import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Button, ButtonProps } from '../../js/components/Button';
import { ExtendedTheme } from '../../themes/cobalt';

type CircularButtonThemedProps = ButtonProps & ThemeProps<Pick<ExtendedTheme, 'paper'>>;

const StyledButton = styled<React.ComponentType<CircularButtonThemedProps>>(Button)`
`;

export interface CircularButtonProps extends ButtonProps {
}

const CircularButton = (props: CircularButtonProps) => (
  <StyledButton {...props} />
);

export default CircularButton;
