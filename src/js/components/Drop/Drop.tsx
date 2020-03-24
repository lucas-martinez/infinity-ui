import React, { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ElevationType,
  getNewContainer,
  KeyboardType,
  setFocusWithoutScroll,
} from '../../utils';
import { DivIntrinsicProps } from '../intrinsic-elements';
import { DropContainer } from './DropContainer';

export interface DropProps extends DivIntrinsicProps {
  align?: {
    top?: 'top' | 'bottom';
    bottom?: 'top' | 'bottom';
    right?: 'left' | 'right';
    left?: 'left' | 'right';
  };
  elevation?: ElevationType;
  onClickOutside?: (...args: any[]) => any;
  onEsc?: KeyboardType;
  overflow?:
    | 'auto'
    | 'hidden'
    | 'scroll'
    | 'visible'
    | {
        horizontal?: 'auto' | 'hidden' | 'scroll' | 'visible';
        vertical?: 'auto' | 'hidden' | 'scroll' | 'visible';
      }
    | string;
  responsive?: boolean;
  restrictFocus?: boolean;
  stretch?: boolean;
  target?: object;
  plain?: boolean;
}

const Drop = forwardRef(
  (
    {
      restrictFocus,
      target: dropTarget, // avoid DOM leakage
      ...rest
    }: DropProps,
    ref,
  ) => {
    const [originalFocusedElement, setOriginalFocusedElement] = useState<any>();
    useEffect(() => setOriginalFocusedElement(document.activeElement), []);
    const [dropContainer, setDropContainer] = useState<any>();
    useEffect(() => setDropContainer(getNewContainer()), []);

    // just a few things to clean up when the Drop is unmounted
    useEffect(
      () => () => {
        if (restrictFocus && originalFocusedElement) {
          if (originalFocusedElement.focus) {
            setFocusWithoutScroll(originalFocusedElement);
          } else if (
            originalFocusedElement.parentNode &&
            originalFocusedElement.parentNode.focus
          ) {
            // required for IE11 and Edge
            setFocusWithoutScroll(originalFocusedElement.parentNode);
          }
        }
        if (dropContainer) {
          document.body.removeChild(dropContainer);
        }
      },
      [dropContainer, originalFocusedElement, restrictFocus],
    );

    return dropContainer
      ? createPortal(
          <DropContainer
            ref={ref}
            dropTarget={dropTarget}
            restrictFocus={restrictFocus}
            {...rest}
          />,
          dropContainer,
        )
      : null;
  },
);

Drop.displayName = 'Drop';

let DropDoc;
if (process.env.NODE_ENV !== 'production') {
  DropDoc = require('./doc').doc(Drop); // eslint-disable-line global-require
}
const DropWrapper = DropDoc || Drop;

export { DropWrapper as Drop };
