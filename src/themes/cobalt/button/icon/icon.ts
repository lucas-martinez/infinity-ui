import spec from '../../quantum-spec';

export const iconButton = {
  backgroundColor: {
    dark: spec.global.buttonIcon.backgroundColorDark,
    light: spec.global.buttonIcon.backgroundColor,
  },
  border: spec.global.buttonIcon.border,
  fontSize: spec.global.buttonIcon.fontSize,
  fontWeight: spec.global.buttonIcon.fontWeight,
  height: spec.global.buttonIcon.height,
  margin: spec.global.buttonIcon.margin,
  minWidth: spec.global.buttonIcon.minWidth,
  padding: spec.global.buttonIcon.padding,

  active: {
    backgroundColor: {
      dark: spec.global.buttonIcon.backgroundColorActiveDark,
      light: spec.global.buttonIcon.backgroundColorActive,
    },
    borderColor: {
      dark: spec.global.buttonIcon.borderColorActiveDark,
      light: spec.global.buttonIcon.borderColorActive,
    },
    boxShadow: {
      dark: spec.global.buttonIcon.boxShadowActiveDark,
      light: spec.global.buttonIcon.boxShadowActive,
    },
    color: {
      dark: spec.global.buttonIcon.colorActiveDark,
      light: spec.global.buttonIcon.colorActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.buttonIcon.backgroundColorDisabledDark,
      light: spec.global.buttonIcon.backgroundColorDisabled,
    },
    color: {
      dark: spec.global.buttonIcon.colorDisabledDark,
      light: spec.global.buttonIcon.colorDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.buttonIcon.backgroundColorFocusDark,
      light: spec.global.buttonIcon.backgroundColorFocus,
    },
    borderColor: {
      dark: spec.global.buttonIcon.borderColorFocusDark,
      light: spec.global.buttonIcon.borderColorFocus,
    },
    boxShadow: {
      dark: spec.global.buttonIcon.boxShadowFocusDark,
      light: spec.global.buttonIcon.boxShadowFocus,
    },
    color: {
      dark: spec.global.buttonIcon.colorFocusDark,
      light: spec.global.buttonIcon.colorFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.buttonIcon.backgroundColorHoverDark,
      light: spec.global.buttonIcon.backgroundColorHover,
    },
    borderColor: {
      dark: spec.global.buttonIcon.borderColorHoverDark,
      light: spec.global.buttonIcon.borderColorHover,
    },
    boxShadow: {
      dark: spec.global.buttonIcon.boxShadowHoverDark,
      light: spec.global.buttonIcon.boxShadowHover,
    },
    color: {
      dark: spec.global.buttonIcon.colorHoverDark,
      light: spec.global.buttonIcon.colorHover,
    },
  }
};

export type IconButton = typeof iconButton;

export default iconButton;