import ColorType from './Color';
import { OpacityType, BackgroundType, GraphColorsType } from '../../utils';
import Breakpoints from './Breakpoints';
import { Colors } from '../../themes/base';

export default interface GlobalTheme {
  active: {
    background: {
      color: ColorType;
      opacity: OpacityType;
    };
    color: ColorType;
  };
  animation: {
    duration: string;
    jiggle: {
      duration: string;
    };
  };
  borderSize: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  breakpoints: Breakpoints;
  deviceBreakpoints: {
    phone: string;
    tablet: string;
    computer: string;
  };
  colors: Colors;
  control: {
    border: {
      width: string;
      radius: string;
      color: ColorType;
    };
    disabled: {
      opacity: OpacityType;
    };
  };
  debounceDelay: number;
  drop: {
    background: BackgroundType;
    border: {
      width: string;
      radius: string;
    };
    shadowSize: string;
    zIndex: string;
  };
  edgeSize: {
    none: string;
    hair: string;
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    responsiveBreakpoint: string;
  };
  elevation: {
    light: {
      none: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    dark: {
      none: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  };
  focus: {
    border: {
      color: ColorType;
    };
  };
  font: {
    face: string;
    family: string;
    height: string;
    maxWidth: string;
    size: string;
  };
  graph: {
    colors: GraphColorsType;
  };
  hover: {
    background: BackgroundType;
    color: ColorType;
  };
  input: {
    padding: string;
    weight: number;
  };
  opacity: {
    strong: number;
    medium: number;
    weak: number;
  };
  selected: {
    background: BackgroundType;
    color: ColorType;
  };
  spacing: string;
  size: {
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    full: string;
    [x: string]: string | undefined;
  };
}
