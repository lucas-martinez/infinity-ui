import React from './node_modules/react';
import styled, { ThemeProps } from './node_modules/styled-components';
import { Button, ButtonProps } from '../../js/components/Button';
import { ExtendedTheme } from '../../themes/cobalt';

type IconButtonThemedProps = ButtonProps & ThemeProps<Pick<ExtendedTheme, 'paper'>>;

const StyledButton = styled<React.ComponentType<IconButtonThemedProps>>(Button)`
`;

export interface IconButtonProps extends ButtonProps {
}

const IconButton = (props: IconButtonProps) => (
  <StyledButton {...props} />
);

export default IconButton;
