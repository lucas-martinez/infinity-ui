import spec from '../quantum-spec';

export const checkboxSwitchCircle = {
  animationChecked: spec.global.checkboxSwitchCircle.animationChecked,
  backgroundColor: {
    dark: spec.global.checkboxSwitchCircle.backgroundColorDark,
    light: spec.global.checkboxSwitchCircle.backgroundColor,
  },
  border: spec.global.checkboxSwitchCircle.border,
  borderColor: {
    dark: spec.global.checkboxSwitchCircle.borderColorDark,
    light: spec.global.checkboxSwitchCircle.borderColor,
  },
  borderWidth: spec.global.checkboxSwitchCircle.borderWidth,
  height: spec.global.checkboxSwitchCircle.height,
  size: spec.global.checkboxSwitchCircle.size,
  transition: spec.global.checkboxSwitchCircle.transition,
  width: spec.global.checkboxSwitchCircle.width,

  focus: {
    backgroundColor: {
      dark: spec.global.checkboxSwitchCircle.backgroundColorFocusDark,
      light: spec.global.checkboxSwitch.backgroundColorFocus,
    },
    borderColor: {
      dark: spec.global.checkboxSwitchCircle.borderColorFocusDark,
      light: spec.global.checkboxSwitchCircle.borderColorFocus,
    },
    boxShadow: {
      dark: spec.global.checkboxSwitchCircle.boxShadowFocusDark,
      light: spec.global.checkboxSwitchCircle.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.checkboxSwitchCircle.backgroundColorHoverDark,
      light: spec.global.checkboxSwitchCircle.backgroundColorHover,
    },
    borderColor: {
      dark: spec.global.checkboxSwitchCircle.borderColorHoverDark,
      light: spec.global.checkboxSwitchCircle.borderColorHover,
    },
    growth: spec.global.checkboxSwitchCircle.growthHover,
    width: spec.global.checkboxSwitchCircle.widthHover,
  },

  checked: {
    border: spec.global.checkboxSwitchCircle.borderChecked,
    borderColor: {
      dark: spec.global.checkboxSwitchCircle.borderColorCheckedDark,
      light: spec.global.checkboxSwitchCircle.borderColorChecked,
    },

    focus: {
      backgroundColor: {
        dark: spec.global.checkboxSwitchCircle.backgroundColorFocusCheckedDark,
        light: spec.global.checkboxSwitchCircle.backgroundColorFocusChecked,
      },
      borderColor: {
        dark: spec.global.checkboxSwitchCircle.borderColorFocusCheckedDark,
        light: spec.global.checkboxSwitchCircle.borderColorFocusChecked,
      },
      boxShadow: {
        dark: spec.global.checkboxSwitchCircle.boxShadowFocusCheckedDark,
        light: spec.global.checkboxSwitchCircle.boxShadowFocusChecked,
      },
    },
    hover: {
      backgroundColor: {
        dark: spec.global.checkboxSwitchCircle.backgroundColorHoverCheckedDark,
        light: spec.global.checkboxSwitchCircle.backgroundColorHoverChecked,
      },
      width: spec.global.checkboxSwitchCircle.widthHoverChecked,
    },
  },
};