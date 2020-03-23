import React, { Children, cloneElement, useState } from 'react';
import { Box } from '../Box';
import { DivIntrinsicProps } from '../intrinsic-elements';
import {
  A11yTitleType,
  AlignSelfType,
  AnimateType,
  GridAreaType,
  MarginType,
} from '../../utils';

const activeAsArray = active =>
  typeof active === 'number' ? [active] : active;

export interface AccordionProps extends DivIntrinsicProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  gridArea?: GridAreaType;
  margin?: MarginType;
  activeIndex?: number | number[];
  animate?: AnimateType;
  onActive?: (activeIndexes: number[]) => void;
  multiple?: boolean;
  messages?: { tabContents?: string };
}

const Accordion = ({
  activeIndex,
  animate = true,
  children,
  multiple,
  onActive,
  ...rest
}: AccordionProps) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [stateActiveIndex, setStateActiveIndex] = useState<number | number[]>();

  // Derived state from props
  // https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
  const derivedActiveIndexes = activeAsArray(activeIndex) || [];
  if (
    (typeof activeIndex !== 'undefined' || activeIndex !== stateActiveIndex) &&
    derivedActiveIndexes.join() !== activeIndexes.join()
  ) {
    setActiveIndexes(derivedActiveIndexes);
    setStateActiveIndex(activeIndex);
  }

  const onPanelChange = index => {
    let nextActiveIndexes: any[] = [...(activeIndexes || [])];

    const nextActiveIndex = nextActiveIndexes.indexOf(index);
    if (nextActiveIndex > -1) {
      nextActiveIndexes.splice(nextActiveIndex, 1);
    } else if (multiple) {
      nextActiveIndexes.push(index);
    } else {
      nextActiveIndexes = [index];
    }

    setActiveIndexes(nextActiveIndexes);
    if (onActive) {
      onActive(nextActiveIndexes);
    }
  };

  return (
    <Box role="tablist" {...rest}>
      {Children.toArray(children)
        .filter(child => child)
        .map((child, index) => {
          if (child) {
            return cloneElement(child, {
              active: activeIndexes.indexOf(index) > -1,
              animate,
              onPanelChange: () => onPanelChange(index),
            });
          }
          return child;
        })}
    </Box>
  );
};

let AccordionDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  AccordionDoc = require('./doc').doc(Accordion);
}
const AccordionWrapper = AccordionDoc || Accordion;

export { AccordionWrapper as Accordion };
