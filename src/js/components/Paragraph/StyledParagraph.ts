import styled, { css } from 'styled-components';

import { genericStyles, normalizeColor } from '../../utils';
import { defaultProps } from '../../default-props';

const colorStyle = css<any>`
  color: ${props => normalizeColor(props.colorProp, props.theme)};
`;

const sizeStyle = props => {
  const size = props.size || 'medium';
  const data = props.theme.paragraph[size];
  return css<any>`
    font-size: ${data.size};
    line-height: ${data.height};
    max-width: ${props.fillProp ? 'none' : data.maxWidth};
  `;
};

const TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left',
};

const textAlignStyle = css<any>`
  text-align: ${props => TEXT_ALIGN_MAP[props.textAlign]};
`;

const StyledParagraph = styled.p<any>`
  ${genericStyles}
  ${props => sizeStyle(props)}
  ${props => props.textAlign && textAlignStyle}
  ${props => props.colorProp && colorStyle}

  ${props => props.theme.paragraph && props.theme.paragraph.extend}
`;

StyledParagraph.defaultProps = {};
Object.setPrototypeOf(StyledParagraph.defaultProps, defaultProps);

export { StyledParagraph };