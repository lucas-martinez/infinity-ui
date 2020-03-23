import ColorType from '../Theme/Color';
import ExtendType from '../Theme/ExtendType';

export default interface RadioButtonTheme {
  border: {
    color: ColorType;
    width: string;
  };
  check: {
    radius: string;
  };
  hover: {
    border: {
      color: ColorType;
    };
  };
  icon: {
    extend: ExtendType;
    size: string;
  };
  icons: {
    circle: string;
  };
  gap: string;
  size: string;
}
