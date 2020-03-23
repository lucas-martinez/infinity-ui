import ColorType from '../Theme/Color';
import ExtendType from '../Theme/ExtendType';
import { BackgroundType, GapType } from '../../utils';

export default interface CheckBoxTheme {
  border: {
    color: ColorType;
    width: string;
  };
  check: {
    extend: ExtendType;
    radius: string;
    thickness: string;
  };
  color: ColorType;
  extend: ExtendType;
  gap: GapType;
  hover: {
    border: {
      color: ColorType;
    };
  };
  icon: {
    size: string;
    extend: ExtendType;
  };
  icons: {
    checked: any;
    indeterminate: any;
  };
  size: string;
  toggle: {
    background: BackgroundType;
    color: ColorType;
    extend: ExtendType;
    radius: string;
    size: string;
    knob: {
      extend: ExtendType;
    };
  };
}