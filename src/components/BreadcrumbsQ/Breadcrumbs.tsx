import React from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import { Box, BoxProps } from '../../js/components/Box';
import { ExtendedTheme } from '../../themes/cobalt';
import pick from '../../themes/pick';

export interface BreadcrumbsProps extends BoxProps {
  children?: React.ReactNode | React.ReactNodeArray;
}

type BreadcrumbsThemedProps = BreadcrumbsProps & ThemeProps<Pick<ExtendedTheme, 'breadcrumbs' | 'icon'>>;

const BoxStyled = styled<React.ComponentType<BreadcrumbsThemedProps>>(Box)`
  ${props => css`
    background-color: ${pick(props.theme?.breadcrumbs?.backgroundColor)};
    border-radius: ${props.theme?.breadcrumbs?.borderRadius};
    display: ${props.theme?.breadcrumbs?.display};
    font-size: ${props.theme?.breadcrumbs?.fontSize};
    font-weight: ${props.theme?.breadcrumbs?.fontWeight};
    margin-bottom: ${props.theme?.breadcrumbs?.marginBottom};
    margin-top: ${props.theme?.breadcrumbs?.marginTop};
    padding: ${props.theme?.breadcrumbs?.padding};

    > svg {
      height: ${props.theme?.icon?.height};
      width: ${props.theme?.icon?.width};
      margin: ${props.theme?.breadcrumbs?.separation?.padding};
    }
  `}
`;

const Breadcrumbs = (props: BreadcrumbsProps) => (<BoxStyled {...props} />);

export default Breadcrumbs;