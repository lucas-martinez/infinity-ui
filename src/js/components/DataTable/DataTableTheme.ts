import { BackgroundType, PadType } from '../../utils';
import ColorType from '../Theme/Color';

export default interface DataTableTheme {
  header: {};
  groupHeader: {
    border: {
      side: string;
      size: string;
    };
    fill: string;
    pad: PadType;
    background: BackgroundType;
  };
  groupEnd: {
    border: {
      side: string;
      size: string;
    };
  };
  icons: {
    ascending: any;
    contract: any;
    descending: any;
    expand: any;
  };
  resize: {
    border: {
      side: string;
      color: ColorType;
    };
  };
  primary: {
    weight: string;
  };
}
