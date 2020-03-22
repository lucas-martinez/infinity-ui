import spec from './quantum-spec';
import { PartialTheme, PartialThemeGenerator } from '.';

export const paper = {
  depth0: {
    backgroundColor: {
      dark: spec.global.paper.backgroundColorDepth0Dark,
      light: spec.global.paper.backgroundColorDepth0,
    },
    boxShadow: {
      dark: spec.global.paper.boxShadowDepth0Dark,
      light: spec.global.paper.boxShadowDepth0,
    },
    hover: {},
    padding: spec.global.paper.paddingDepth0,
  },
  depth1: {
    backgroundColor: {
      dark: spec.global.paper.backgroundColorDepth1Dark,
      light: spec.global.paper.backgroundColorDepth1,
    },
    boxShadow: {
      dark: spec.global.paper.boxShadowDepth1Dark,
      light: spec.global.paper.boxShadowDepth1,
    },
    hover: {
      boxShadow: {
        light: spec.global.paper.boxShadowDepth1Hover,
        dark: spec.global.paper.boxShadowDepth1HoverDark,
      },
    },
    padding: spec.global.paper.paddingDepth1,
  },
  depth2: {
    backgroundColor: {
      dark: spec.global.paper.backgroundColorDepth2Dark,
      light: spec.global.paper.backgroundColorDepth2,
    },
    boxShadow: {
      dark: spec.global.paper.boxShadowDepth2Dark,
      light: spec.global.paper.boxShadowDepth2,
    },
    right: {
      boxShadow: {
        light: spec.global.paper.boxShadowDepth2Right,
        dark: spec.global.paper.boxShadowDepth2RightDark,
      },
    },
  },
  depth3: {
    backgroundColor: {
      dark: spec.global.paper.backgroundColorDepth2Dark,
      light: spec.global.paper.backgroundColorDepth2,
    },
    boxShadow: {
      dark: spec.global.paper.boxShadowDepth3Dark,
      light: spec.global.paper.boxShadowDepth3,
    },
  },
};

export type PaperTheme = typeof paper;

const generator: PartialThemeGenerator<'paper'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    paper
  };
};

export default generator;
