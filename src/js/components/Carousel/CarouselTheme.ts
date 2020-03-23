import ColorType from '../Theme/Color';

export default interface CarouselTheme {
  animation: {
    duration: number;
  };
  disabled: {
    icons: {
      color: ColorType;
    };
  };
  icons: {
    color: ColorType;
    current: any;
    next: any;
    previous: any;
  };
}