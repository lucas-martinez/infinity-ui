import ColorType from '../Theme/Color';
import { OpacityType } from '../../utils';
import ExtendType from '../Theme/ExtendType';

export default interface ButtonTheme {
  border: {
    color: ColorType;
    width: string;
    radius: string;
  };
  disabled: {
    opacity: OpacityType;
  };
  extend: ExtendType;
  minWidth: string;
  maxWidth: string;
  padding: {
    vertical: string;
    horizontal: string;
  };
  primary: {
    color: ColorType;
  };
  size: {
    small: {
      border: {
        radius: string;
      };
      pad: {
        vertical: string;
        horizontal: string;
      };
    };
    medium: {
      border: {
        radius: string;
      };
      pad: {
        vertical: string;
        horizontal: string;
      };
    };
    large: {
      border: {
        radius: string;
      };
      pad: {
        vertical: string;
        horizontal: string;
      };
    };
  };
  transition: {
    timing: string;
    duration: number;
    properties: string[];
  };
}
