import React, { Children } from 'react';
import {
  A11yTitleType,
  AlignSelfType,
  GridAreaType,
  MarginType,
} from '../../utils';
import { DivIntrinsicProps } from '../intrinsic-elements';
import { StyledStack, StyledStackLayer } from './StyledStack';

const buildStyledChildren = ({
  anchor,
  fill,
  guidingIndex,
  interactiveChild,
  interactiveIndex,
}) => {
  let childIndex = 0;

  return child => {
    if (child) {
      const interactive =
        interactiveChild === undefined || interactiveIndex === childIndex;

      const isGuidingIndex = childIndex === guidingIndex;
      childIndex += 1;

      const props = isGuidingIndex
        ? {
            guiding: true,
            fillContainer: fill,
          }
        : {
            anchor,
          };

      return (
        <StyledStackLayer interactive={interactive} {...props}>
          {child}
        </StyledStackLayer>
      );
    }

    return child;
  };
};

export interface StackProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  anchor?:
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'top-left'
    | 'bottom-left'
    | 'top-right'
    | 'bottom-right';
  fill?: boolean;
  gridArea?: GridAreaType;
  guidingChild?: number | 'first' | 'last';
  interactiveChild?: number | 'first' | 'last';
  margin?: MarginType;
}

const Stack = ({
  anchor,
  children,
  fill,
  guidingChild,
  interactiveChild,
  ...rest
}: StackProps & DivIntrinsicProps) => {
  const toChildIndex = child => {
    let index = child;

    if (index === 'first' || !index) index = 0;
    else if (index === 'last') index = React.Children.count(children) - 1;

    return index;
  };

  const guidingIndex = toChildIndex(guidingChild);
  const interactiveIndex = interactiveChild && toChildIndex(interactiveChild);

  const styledChildren = Children.map(
    children,
    buildStyledChildren({
      anchor,
      fill,
      guidingIndex,
      interactiveChild,
      interactiveIndex,
    }),
  );

  return (
    <StyledStack fillContainer={fill} {...rest}>
      {styledChildren}
    </StyledStack>
  );
};

let StackDoc;
if (process.env.NODE_ENV !== 'production') {
  StackDoc = require('./doc').doc(Stack); // eslint-disable-line global-require
}
const StackWrapper = StackDoc || Stack;

export { StackWrapper as Stack };
