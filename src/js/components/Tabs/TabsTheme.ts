import { BackgroundType, GapType } from '../../utils';
import ExtendType from '../Theme/ExtendType';

export default interface TabsTheme {
  background: BackgroundType;
  extend: ExtendType;
  gap: GapType;
  header: {
    background: BackgroundType;
    extend: ExtendType;
  };
  panel: {
    extend: ExtendType;
  };
}
