import { deepMerge } from '../../../../js/utils';
import spec from '../../quantum-spec';
import defaultStyle from './default';

const primaryStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: spec.global.button.backgroundColorPrimaryDark,
    light: spec.global.button.backgroundColorPrimary,
  },
  color: {
    dark: spec.global.button.colorPrimaryDark,
    light: spec.global.button.colorPrimary,
  },
  borderColor: {
    dark: spec.global.button.borderColorPrimaryDark,
    light: spec.global.button.borderColorPrimary,
  },

  active: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorPrimaryActiveDark,
      light: spec.global.button.backgroundColorPrimaryActive,
    },
    color: {
      dark: spec.global.button.colorPrimaryActiveDark,
      light: spec.global.button.colorPrimaryActive,
    },
    borderColor: {
      dark: spec.global.button.borderColorPrimaryActiveDark,
      light: spec.global.button.borderColorPrimaryActive,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowPrimaryActiveDark,
      light: spec.global.button.boxShadowPrimaryActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorPrimaryDisabledDark,
      light: spec.global.button.backgroundColorPrimaryDisabled,
    },
    color: {
      dark: spec.global.button.colorPrimaryDisabledDark,
      light: spec.global.button.colorPrimaryDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorPrimaryFocusDark,
      light: spec.global.button.backgroundColorPrimaryFocus,
    },
    color: {
      dark: spec.global.button.colorPrimaryFocusDark,
      light: spec.global.button.colorPrimaryFocus,
    },
    borderColor: {
      dark: spec.global.button.borderColorPrimaryFocusDark,
      light: spec.global.button.borderColorPrimaryFocus,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowFocus,
      light: spec.global.button.boxShadowFocus
    }
  },

  hover: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorPrimaryHoverDark,
      light: spec.global.button.backgroundColorPrimaryHover,
    },
    color: {
      dark: spec.global.button.colorPrimaryHoverDark,
      light: spec.global.button.colorPrimaryHover,
    },
    borderColor: {
      dark: spec.global.button.borderColorPrimaryHoverDark,
      light: spec.global.button.borderColorPrimaryHover,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowPrimaryHoverDark,
      light: spec.global.button.boxShadowPrimaryHover,
    },
  }
});

export default primaryStyle;