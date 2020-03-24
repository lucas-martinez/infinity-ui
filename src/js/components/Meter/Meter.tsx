import React, { useMemo } from 'react';
import {
  A11yTitleType,
  AlignSelfType,
  GridAreaType,
  MarginType,
  OpacityType,
} from '../../utils';
import { Bar } from './Bar';
import { Circle } from './Circle';

const deriveMax = values => {
  let max = 100;
  if (values && values.length > 1) {
    max = 0;
    values.forEach(v => {
      max += v.value;
    });
  }
  return max;
};

export interface MeterProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  background?: string | { color?: string; opacity?: OpacityType };
  gridArea?: GridAreaType;
  margin?: MarginType;
  max?: number;
  round?: boolean;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'full' | string;
  thickness?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | string;
  type?: 'bar' | 'circle';
  values?: {
    color?: string;
    highlight?: boolean;
    label?: string;
    onClick?: (...args: any[]) => any;
    onHover?: (...args: any[]) => any;
    value: number;
  }[];
}

const Meter: React.FC<MeterProps> = ({
  background = { color: 'light-2', opacity: 'medium' },
  size = 'medium',
  thickness = 'medium',
  type = 'bar',
  values,
  ...rest
}) => {
  const memoizedMax = useMemo(() => deriveMax(values), [values]);
  let content;
  if (type === 'bar') {
    content = (
      <Bar
        max={memoizedMax}
        values={values}
        size={size}
        thickness={thickness}
        background={background}
        {...rest}
      />
    );
  } else if (type === 'circle') {
    content = (
      <Circle
        max={memoizedMax}
        values={values}
        size={size}
        thickness={thickness}
        background={background}
        {...rest}
      />
    );
  }
  return content;
};
export { MeterWrapper as Meter };

let MeterDoc;
if (process.env.NODE_ENV !== 'production') {
  MeterDoc = require('./doc').doc(Meter); // eslint-disable-line global-require
}
const MeterWrapper = MeterDoc || Meter;

export { MeterWrapper as Meter };
