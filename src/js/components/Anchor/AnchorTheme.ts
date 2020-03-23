import Color from '../Theme/Color';
import ExtendType from '../Theme/ExtendType';

export default interface AnchorTheme {
  color: Color;
  extend: ExtendType;
  fontWeight: number;
  hover: {
    extend: ExtendType;
    textDecoration: string;
  };
  textDecoration: string;
}
