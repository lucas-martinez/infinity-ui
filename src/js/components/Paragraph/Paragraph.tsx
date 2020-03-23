import React from 'react';
import {
  A11yTitleType,
  AlignSelfType,
  ColorType,
  GridAreaType,
  MarginType,
  TextAlignType,
} from '../../utils';
import { ParagraphIntrinsicProps } from '../intrinsic-elements';
import { StyledParagraph } from './StyledParagraph';

export interface ParagraphProps extends Omit<ParagraphIntrinsicProps, 'color'> {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  color?: ColorType;
  fill?: boolean;
  gridArea?: GridAreaType;
  margin?: MarginType;
  responsive?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | string;
  textAlign?: TextAlignType;
}

const Paragraph = ({ color, fill, ...rest }: ParagraphProps) => (
  <StyledParagraph colorProp={color} fillProp={fill} {...rest} />
);

let ParagraphDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  ParagraphDoc = require('./doc').doc(Paragraph);
}
const ParagraphWrapper = ParagraphDoc || Paragraph;

export { ParagraphWrapper as Paragraph };
