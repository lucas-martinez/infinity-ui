import spec from '../quantum-spec';

export const icon = {
  backgroundColor: {
      dark: spec.global.buttonIcon.backgroundColorDark,
      light: spec.global.buttonIcon.backgroundColor
  },
  border: spec.global.buttonIcon.border,
  color: {
    dark: spec.global.buttonIcon.colorDark,
    light: spec.global.buttonIcon.color
  },

  active: {
    borderColor: {
      dark: spec.global.buttonIcon.borderColorActiveDark,
      light: spec.global.buttonIcon.borderColorActive
    },
    boxShadow: {
      dark: spec.global.buttonIcon.boxShadowActiveDark,
      light: spec.global.buttonIcon.boxShadowActive
    }
  },
  focus: {
    borderColor: {
      dark: spec.global.buttonIcon.borderColorFocusDark,
      light: spec.global.buttonIcon.borderColorFocus
    },
    boxShadow: {
      dark: spec.global.buttonIcon.boxShadowFocusDark,
      light: spec.global.buttonIcon.boxShadowFocus
    }
  },
  hover: {
    borderColor: {
      dark: spec.global.buttonIcon.borderColorHoverDark,
      light: spec.global.buttonIcon.borderColorHover
    },
    boxShadow: {
      dark: spec.global.buttonIcon.boxShadowHoverDark,
      light: spec.global.buttonIcon.boxShadowHover
    }
  }
};