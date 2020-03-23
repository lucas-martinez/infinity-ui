import spec from './quantum-spec';
import { PartialThemeGenerator } from '.';

export const icon = {
  color: {
    dark: spec.global.icon.colorDark,
    light: spec.global.icon.color,
  },
  fontFamily: 'QuantumIcons',
  fontWeight: 'normal',
  letterSpacing: 'normal',

  10: {
    width: spec.global.icon.width10,
    height: spec.global.icon.height10,
  },

  small: {
    width: spec.global.icon.widthSmall,
    height: spec.global.icon.heightSmall,
  },
  medium: {
    height: spec.global.icon.height,
    width: spec.global.icon.width,
  },
  large: {
    width: spec.global.icon.widthLarge,
    height: spec.global.icon.heightLarge,
  },
  xlarge: {
    width: spec.global.icon.widthXlarge,
    height: spec.global.icon.heightXlarge,
  },
  xxlarge: {
    width: spec.global.icon.widthXxlarge,
    height: spec.global.icon.heightXxlarge,
  },
  xxxlarge: {
    width: spec.global.icon.widthXxxlarge,
    height: spec.global.icon.heightXxxlarge,
  },

  hover: {
    color: {
      dark: spec.global.icon.colorDarkHover,
      light: spec.global.icon.colorHover,
    },
  },
  focus: {
    color: {
      dark: spec.global.icon.colorDarkFocus,
      light: spec.global.icon.colorFocus,
    },
  },
  active: {
    color: {
      dark: spec.global.icon.colorDarkActive,
      light: spec.global.icon.colorActive,
    },
  },
  disabled: {
    color: {
      dark: spec.global.icon.colorDarkDisabled,
      light: spec.global.icon.colorDisabled,
    },
  },
};

const generator: PartialThemeGenerator<'icon'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    icon: {
      // colors,
      size: {
        small: spec.global.icon.widthSmall,
        medium: spec.global.icon.width,
        large: spec.global.icon.widthLarge,
        xlarge: spec.global.icon.widthXlarge,
      },
    },
  };
};

export default generator;
