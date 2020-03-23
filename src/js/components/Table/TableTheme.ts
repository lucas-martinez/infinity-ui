import { BackgroundType, PadType } from '../../utils';
import ExtendType from '../Theme/ExtendType';

export default interface TableTheme {
  header: {
    background: BackgroundType;
    extend: ExtendType;
    align: string;
    pad: PadType;
    border: string;
    verticalAlign: string;
    fill: string;
  };
  body: {
    align: string;
    background: BackgroundType;
    border: string;
    extend: ExtendType;
    pad: PadType;
  };
  footer: {
    align: string;
    background: BackgroundType;
    extend: ExtendType;
    pad: PadType;
    border: string;
    verticalAlign: string;
    fill: string;
  };
  row: {
    hover: {
      background: BackgroundType;
      extend: ExtendType;
    };
  };
}