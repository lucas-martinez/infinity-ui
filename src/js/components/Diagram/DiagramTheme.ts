import ColorType from '../Theme/Color';
import ExtendType from '../Theme/ExtendType';

export default interface DiagramTheme {
  extend: ExtendType;
  line: {
    color: ColorType;
  };
}
