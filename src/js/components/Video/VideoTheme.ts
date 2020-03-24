import ColorType from '../Theme/Color';
import { BackgroundType } from '../../utils';

export default interface VideoTheme {
  captions: {
    background: BackgroundType;
  };
  controls: {
    background: BackgroundType;
  };
  icons: {
    closedCaption: any;
    color: ColorType;
    configure: any;
    fullScreen: any;
    pause: any;
    play: any;
    reduceVolume: any;
    volume: any;
  };
  scrubber: {
    color: ColorType;
    track: {
      color: ColorType;
    }
  };
}