import React from 'react';
import {
  A11yTitleType,
  AlignSelfType,
  ColorType,
  GridAreaType,
  MarginType,
  PolymorphicType,
  TextAlignType,
} from '../../utils';
import { SpanIntrinsicProps } from '../intrinsic-elements';
import { StyledText } from './StyledText';

export interface TextProps extends SpanIntrinsicProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  as?: PolymorphicType;
  color?: ColorType;
  gridArea?: GridAreaType;
  margin?: MarginType;
  size?:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | string;
  tag?: PolymorphicType;
  textAlign?: TextAlignType;
  truncate?: boolean;
  weight?: 'normal' | 'bold' | number;
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
}

const Text = ({ color, tag, as, ...rest }: TextProps) => (
  <StyledText as={!as && tag ? tag : as} colorProp={color} {...rest} />
);

Text.defaultProps = {
  level: 1,
};

let TextDoc;
if (process.env.NODE_ENV !== 'production') {
  TextDoc = require('./doc').doc(Text); // eslint-disable-line global-require
}
const TextWrapper = TextDoc || Text;

export { TextWrapper as Text };
