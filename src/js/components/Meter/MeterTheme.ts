import { GraphColorsType } from '../../utils';
import ColorType from '../Theme/Color';
import ExtendType from '../Theme/ExtendType';

export default interface MeterTheme {
  color: ColorType;
  colors: GraphColorsType;
  extend: ExtendType;
}

