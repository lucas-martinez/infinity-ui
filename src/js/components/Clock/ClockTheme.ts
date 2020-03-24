import ColorType from '../Theme/Color';
import ExtendType from '../Theme/ExtendType';

export interface ClockAnalogTheme {
  extend: ExtendType;
  hour: {
    color: ColorType;
    width: string;
    size: string;
    shape: 'butt' | 'round' | 'square' | 'inherit';
  };
  minute: {
    color: ColorType;
    width: string;
    size: string;
    shape: 'butt' | 'round' | 'square' | 'inherit';
  };
  second: {
    color: ColorType;
    width: string;
    size: string;
    shape: 'butt' | 'round' | 'square' | 'inherit';
  };
  size: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    huge: string;
  };
}

export interface ClockDigitalTheme {
  text: {
    xsmall: {
      size: string;
      height: number;
    };
    small: {
      size: string;
      height: number;
    };
    medium: {
      size: string;
      height: number;
    };
    large: {
      size: string;
      height: number;
    };
    xlarge: {
      size: string;
      height: number;
    };
    xxlarge: {
      size: string;
      height: number;
    };
  };
}

export default interface ClockTheme {
  analog: ClockAnalogTheme;
  digital: ClockDigitalTheme;
}
