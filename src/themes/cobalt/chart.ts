import { css } from 'styled-components';
import spec from './quantum-spec';
import { PartialThemeGenerator } from '.';

export const chart = {

};

export type ChartTheme = typeof chart;

const generator: PartialThemeGenerator<'chart'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    chart,
  };
};

export default generator;
