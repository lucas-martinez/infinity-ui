import { BackgroundType } from '../../utils';
import ExtendType from '../Theme/ExtendType';

export default interface MenuTheme {
  background: BackgroundType;
  extend: ExtendType;
  icons: {
    down: any;
  };
}
