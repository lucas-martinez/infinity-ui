import React from 'react';
import { A11yTitleType, AlignSelfType, ColorType, GridAreaType, MarginType, PolymorphicType, TextAlignType } from "../../utils";
import { StyledHeading } from './StyledHeading';
import { HeadingIntrinsicProps } from '../intrinsic-elements';

export interface HeadingProps extends Omit<HeadingIntrinsicProps, 'color'> {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  as?: PolymorphicType;
  color?: ColorType;
  gridArea?: GridAreaType;
  level?: "1" | "2" | "3" | "4" | "5" | "6" | 1 | 2 | 3 | 4 | 5 | 6;
  margin?: MarginType;
  responsive?: boolean;
  size?: "small" | "medium" | "large" | "xlarge" | string;
  textAlign?: TextAlignType;
  truncate?: boolean;
}

const Heading = (props: HeadingProps) => {
  const {
    color, // munged to avoid styled-components putting it in the DOM
    level,
    ...rest
  } = props;

  // enforce level to be a number
  return (
    <StyledHeading
      as={`h${level!}`}
      colorProp={color}
      level={+level!}
      {...rest}
    />
  );
};

Heading.defaultProps = {
  level: 1,
  responsive: true,
};

let HeadingDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  HeadingDoc = require('./doc').doc(Heading);
}
const HeadingWrapper = HeadingDoc || Heading;

export { HeadingWrapper as Heading };

