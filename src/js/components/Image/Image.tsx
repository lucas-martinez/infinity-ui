import React, { useState } from 'react';
import { compose } from 'recompose';
import {
  A11yTitleType,
  AlignSelfType,
  FillType,
  GridAreaType,
  MarginType,
} from '../../utils';
import { withForwardRef } from '../hocs';
import { ImageIntrinsicProps } from '../intrinsic-elements';
import { StyledImage } from './StyledImage';

export interface ImageProps extends ImageIntrinsicProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  fallback?: string;
  fill?: FillType;
  fit?: 'cover' | 'contain';
  forwardRef: any;
  gridArea?: GridAreaType;
  margin?: MarginType;
  opacity?: 'weak' | 'medium' | 'strong' | string | boolean;
}

const Image = ({
  fallback,
  forwardRef,
  onError,
  opacity,
  fill,
  src,
  ...rest
}: ImageProps) => {
  const [imageMissing, setImageMissing] = useState(false);
  const handleError = event => {
    if (onError) {
      onError(event);
    }
    setImageMissing(true);
  };
  const extraProps = {
    onError: (onError || fallback) && handleError,
  };
  return (
    <StyledImage
      {...rest}
      {...extraProps}
      ref={forwardRef}
      opacityProp={opacity}
      fillProp={fill}
      src={!imageMissing ? src : fallback}
    />
  );
};

let ImageDoc;
if (process.env.NODE_ENV !== 'production') {
  ImageDoc = require('./doc').doc(Image); // eslint-disable-line global-require
}

const ImageWrapper = compose(withForwardRef)(ImageDoc || Image);

export { ImageWrapper as Image };
