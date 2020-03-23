import { BackgroundType, MarginType, PadType } from '../../utils';
import ColorType from '../Theme/Color';
import ExtendType from '../Theme/ExtendType';

export default interface TabTheme {
  active: {
    background: BackgroundType;
    color: ColorType;
  };
  background: BackgroundType;
  border: {
    side: string;
    size: string;
    color: ColorType;
    active: {
      color: ColorType;
    };
    hover: {
      color: ColorType;
      extend: ExtendType;
    };
  };
  color: ColorType;
  extend: ExtendType;
  hover: {
    background: BackgroundType;
    color: ColorType;
    extend: ExtendType;
  };
  margin: MarginType;
  pad: PadType;
}

