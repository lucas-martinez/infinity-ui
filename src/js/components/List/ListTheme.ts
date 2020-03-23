import ColorType from '../Theme/Color';
import { BackgroundType, PadType } from '../../utils';
import ExtendType from '../Theme/ExtendType';

export default interface ListTheme {
  item: {
    background: BackgroundType;
    border:
      | string
      | {
          side: string;
          color: ColorType;
          size: string;
        };
    pad: PadType;
    extend: ExtendType;
  };
  extend: ExtendType;
}
