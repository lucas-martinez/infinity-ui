import { normalize } from '../../../pick';
import spec from '../../quantum-spec';
import defaultStyle, { FlatButtonStyle } from './default';

const primaryStyle: FlatButtonStyle = {
  ...defaultStyle,
  backgroundColor: {
    dark: spec.global.buttonFlat.backgroundColorPrimaryDark,
    light: spec.global.buttonFlat.backgroundColorPrimary,
  },
  color: {
    dark: spec.global.buttonFlat.colorPrimaryDark,
    light: spec.global.buttonFlat.colorPrimary,
  },

  active: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorPrimaryActiveDark,
      light: spec.global.buttonFlat.backgroundColorPrimaryActive,
    },
    color: {
      dark: spec.global.buttonFlat.colorPrimaryActiveDark,
      light: spec.global.buttonFlat.colorPrimaryActive,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowPrimaryActiveDark,
      light: spec.global.buttonFlat.boxShadowPrimaryActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorPrimaryDisabledDark,
      light: spec.global.buttonFlat.backgroundColorPrimaryDisabled,
    },
    color: {
      dark: spec.global.buttonFlat.colorPrimaryDisabledDark,
      light: spec.global.buttonFlat.colorPrimaryDisabled,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowPrimaryDisabledDark,
      light: spec.global.buttonFlat.boxShadowPrimaryDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorPrimaryFocusDark,
      light: spec.global.buttonFlat.backgroundColorPrimaryFocus,
    },
    borderColor: {
      dark: spec.global.buttonFlat.borderColorFocusDark,
      light: spec.global.buttonFlat.borderColorFocus,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowFocusDark,
      light: spec.global.buttonFlat.boxShadowFocus,
    },
    color: {
      dark: spec.global.buttonFlat.colorPrimaryFocusDark,
      light: spec.global.buttonFlat.colorPrimaryFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorPrimaryHoverDark,
      light: spec.global.buttonFlat.backgroundColorPrimaryHover,
    },
    color: {
      dark: spec.global.buttonFlat.colorPrimaryHoverDark,
      light: spec.global.buttonFlat.colorPrimaryHover,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowPrimaryHoverDark,
      light: spec.global.buttonFlat.boxShadowPrimaryHover,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorPrimary),
  },
};

export default primaryStyle;
