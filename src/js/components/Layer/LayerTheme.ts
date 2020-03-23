import { BackgroundType } from '../../utils';
import ExtendType from '../Theme/ExtendType';

export default interface LayerTheme {
  background: BackgroundType;
  border: {
    radius: string;
  };
  container: {
    zIndex: string;
  };
  extend: ExtendType;
  overlay: {
    background: BackgroundType;
  };
  responsiveBreakpoint: string;
  zIndex: string;
}
