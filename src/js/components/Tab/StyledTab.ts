import styled, { css } from 'styled-components';

import { genericStyles, normalizeColor } from '../../utils';
import { defaultProps } from '../../default-props';

const tabHoverStyle = css<any>`
  &:hover {
    ${props =>
      props.theme.tab.hover.background &&
      css<any>`
        background: ${normalizeColor(
          props.theme.tab.hover.background,
          props.theme,
        )};
      `}
    ${props =>
      props.theme.tab.hover.color &&
      css<any>`
        color: ${normalizeColor(props.theme.tab.hover.color, props.theme)};
      `}
    ${props => props.theme.tab.hover.extend};
  }
`;

const StyledTab = styled.div<any>`
  ${genericStyles}
  ${props => !props.plain && props.theme.tab.hover && tabHoverStyle}
  ${props => props.theme.tab.extend}
`;

StyledTab.defaultProps = {};
Object.setPrototypeOf(StyledTab.defaultProps, defaultProps);

export { StyledTab };
