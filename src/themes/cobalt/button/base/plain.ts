import spec from '../../quantum-spec';
import buttonStyle from './button';

export const plainStyle = {
  ...buttonStyle,
  backgroundColor: {
    dark: spec.global.button.backgroundColorDefaultDark,
    light: spec.global.button.backgroundColorDefault,
  },
  borderColor: {
    dark: spec.global.button.borderColorDefaultDark,
    light: spec.global.button.borderColorDefault,
  },
  color: {
    dark: spec.global.button.colorDefaultDark,
    light: spec.global.button.colorDefault,
  },

  active: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorDefaultActiveDark,
      light: spec.global.button.backgroundColorDefaultActive,
    },
    borderColor: {
      dark: spec.global.button.borderColorDefaultActiveDark,
      light: spec.global.button.borderColorDefaultActive,
    },
    color: {
      dark: spec.global.button.colorDefaultActiveDark,
      light: spec.global.button.colorDefaultActive,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowDefaultActiveDark,
      light: spec.global.button.boxShadowDefaultActive
    }
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorDefaultDisabledDark,
      light: spec.global.button.backgroundColorDefaultDisabled
    },
    boxShadow: {
      dark: 'none',
      light: 'none'
    },
    color: {
      dark: spec.global.button.colorDefaultDisabledDark,
      light: spec.global.button.colorDefaultDisabled,
    },
  },
  
  focus: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorDefaultFocusDark,
      light: spec.global.button.backgroundColorDefaultFocus,
    },
    borderColor: {
      dark: spec.global.button.borderColorDefaultFocusDark,
      light: spec.global.button.borderColorDefaultFocus,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowFocus,
      light: spec.global.button.boxShadowFocus
    },
    color: {
      dark: spec.global.button.colorDefaultFocusDark,
      light: spec.global.button.colorDefaultFocus,
    },
  },
  
  hover: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorDefaultHoverDark,
      light: spec.global.button.backgroundColorDefaultHover,
    },
    borderColor: {
      dark: spec.global.button.borderColorDefaultHoverDark,
      light: spec.global.button.borderColorDefaultHover,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowDefaultHoverDark,
      light: spec.global.button.boxShadowDefaultHover
    },
    color: {
      dark: spec.global.button.colorDefaultHoverDark,
      light: spec.global.button.colorDefaultHover,
    },
  }
};

export type BaseButtonStyle = typeof plainStyle;

export default plainStyle;
