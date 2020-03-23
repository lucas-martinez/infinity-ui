import { BreakpointEdgeSize } from '../../utils';

export interface BreakpointBorderSize {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
}

export interface BreakpointSize {          
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  full: string;
}

export default interface Breakpoints {
  small: {
    value: number;
    borderSize: BreakpointBorderSize;
    edgeSize: BreakpointEdgeSize;
    size: BreakpointSize;
  };
  medium: {
    value: number;
    borderSize: BreakpointBorderSize;
    edgeSize: BreakpointEdgeSize;
    size: BreakpointSize;
  };
  large: {
    value: number;
    borderSize: BreakpointBorderSize;
    edgeSize: BreakpointEdgeSize;
    size: BreakpointSize;
  };
  [x: string]:
    | {
        value: number;
        borderSize: BreakpointBorderSize;
        edgeSize: BreakpointEdgeSize;
        size: BreakpointSize;
      }
    | undefined;
}