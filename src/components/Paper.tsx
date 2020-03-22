import React from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import { Box, BoxProps } from '../js/components/Box';
import { ElevationType } from '../js/utils';
import { ExtendedTheme } from '../themes/cobalt';

export interface PaperProps extends BoxProps {
  shadow?: ElevationType | 'depth1' | 'depth2';
}

type PaperThemedProps = PaperProps & ThemeProps<Pick<ExtendedTheme, 'paper'>>;

const BoxStyled = styled<React.ComponentType<PaperThemedProps>>(Box)`
  ${props => {
    switch (props.shadow) {
      case 'depth1':
        break;
      case 'depth2':
        break;
    }
    return css``;
  }}
`;

const Paper = (props: PaperProps) => {
  const { shadow, ...spread } = props;
  switch (shadow) {
    case 'depth1':
      spread.elevation = 'medium';
      break;
    case 'depth2':
      spread.elevation = 'large';
      break;
  }
  return <BoxStyled {...spread} />;
};

export default Paper;
