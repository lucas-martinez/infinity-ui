import React from 'react';
import {
  A11yTitleType,
  AlignContentType,
  AlignSelfType,
  FillType,
  GapType,
  GridAreaType,
  JustifyContentType,
  MarginType,
  PadType,
  PolymorphicType,
} from '../../utils';
import { StyledGrid } from './StyledGrid';
import { DivIntrinsicProps } from '../intrinsic-elements';

export interface GridProps extends DivIntrinsicProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  align?: 'start' | 'center' | 'end' | 'stretch';
  alignContent?: AlignContentType;
  areas?: { name?: string; start?: number[]; end?: number[] }[] | string[][];
  as?: PolymorphicType;
  columns?:
    | (
        | 'xsmall'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | 'full'
        | '1/2'
        | '1/3'
        | '2/3'
        | '1/4'
        | '2/4'
        | '3/4'
        | 'flex'
        | 'auto'
        | 'xsmall'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | 'full'
        | '1/2'
        | '1/3'
        | '2/3'
        | '1/4'
        | '2/4'
        | '3/4'
        | string
        | string[]
      )[]
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | {
        count?: 'fit' | 'fill' | number;
        size?:
          | 'xsmall'
          | 'small'
          | 'medium'
          | 'large'
          | 'xlarge'
          | 'xsmall'
          | 'small'
          | 'medium'
          | 'large'
          | 'xlarge'
          | 'full'
          | '1/2'
          | '1/3'
          | '2/3'
          | '1/4'
          | '2/4'
          | '3/4'
          | 'flex'
          | 'auto'
          | string
          | string[];
      }
    | string;
  fill?: FillType;
  gap?: GapType | { row?: GapType; column?: GapType };
  gridArea?: GridAreaType;
  justify?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: JustifyContentType;
  margin?: MarginType;
  pad?: PadType;
  responsive?: boolean;
  rows?:
    | (
        | 'xsmall'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | 'full'
        | '1/2'
        | '1/3'
        | '2/3'
        | '1/4'
        | '2/4'
        | '3/4'
        | 'flex'
        | 'auto'
        | 'xsmall'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | 'full'
        | '1/2'
        | '1/3'
        | '2/3'
        | '1/4'
        | '2/4'
        | '3/4'
        | string
        | string[]
      )[]
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | string;
  tag?: PolymorphicType;
}

const Grid = (props: GridProps) => {
  const {
    a11yTitle,
    fill, // munged to avoid styled-components putting it in the DOM
    responsive = true,
    rows, // munged to avoid styled-components putting it in the DOM
    tag,
    as,
    ...rest
  } = props;

  return (
    <StyledGrid
      a11yTitleProp={a11yTitle}
      as={!as && tag ? tag : as}
      fillContainer={fill}
      responsive={responsive}
      rowsProp={rows}
      {...rest}
    />
  );
};

let GridDoc;
if (process.env.NODE_ENV !== 'production') {
  GridDoc = require('./doc').doc(Grid); // eslint-disable-line global-require
}
const GridWrapper = GridDoc || Grid;

GridWrapper.available =
  typeof window !== 'undefined' &&
  window.CSS &&
  window.CSS.supports &&
  window.CSS.supports('display', 'grid');

export { GridWrapper as Grid };
