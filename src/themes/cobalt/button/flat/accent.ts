import { normalize } from '../../../pick';
import spec from '../../quantum-spec';
import defaultStyle, { FlatButtonStyle } from './default';

const accentStyle: FlatButtonStyle = {
  ...defaultStyle,
  backgroundColor: {
    dark: spec.global.buttonFlat.backgroundColorAccentDark,
    light: spec.global.buttonFlat.backgroundColorAccent,
  },
  color: {
    dark: spec.global.buttonFlat.colorAccentDark,
    light: spec.global.buttonFlat.colorAccent,
  },

  active: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorAccentActiveDark,
      light: spec.global.buttonFlat.backgroundColorAccentActive,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowAccentActiveDark,
      light: spec.global.buttonFlat.boxShadowAccentActive,
    },
    color: {
      dark: spec.global.buttonFlat.colorAccentActiveDark,
      light: spec.global.buttonFlat.colorAccentActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorAccentDisabledDark,
      light: spec.global.buttonFlat.backgroundColorAccentDisabled,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowAccentDisabledDark,
      light: spec.global.buttonFlat.boxShadowAccentDisabled,
    },
    color: {
      dark: spec.global.buttonFlat.colorAccentDisabledDark,
      light: spec.global.buttonFlat.colorAccentDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorAccentFocusDark,
      light: spec.global.buttonFlat.backgroundColorAccentFocus,
    },
    borderColor: {
      dark: spec.global.buttonFlat.backgroundColorAccentFocusDark,
      light: spec.global.buttonFlat.backgroundColorAccentFocus,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowFocusDark,
      light: spec.global.buttonFlat.boxShadowFocus,
    },
    color: {
      dark: spec.global.buttonFlat.colorAccentFocusDark,
      light: spec.global.buttonFlat.colorAccentFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorAccentDark,
      light: spec.global.buttonFlat.backgroundColorAccent,
    },
    borderColor: {
      dark: spec.global.buttonFlat.backgroundColorAccentHoverDark,
      light: spec.global.buttonFlat.backgroundColorAccentHover,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowAccentHoverDark,
      light: spec.global.buttonFlat.boxShadowAccentHover,
    },
    color: {
      dark: spec.global.buttonFlat.colorAccentDark,
      light: spec.global.buttonFlat.colorAccent,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorAccent),

    disabled: {
      color: normalize(spec.global.buttonDivider.colorAccentDisabled),
    },
  },
};

export default accentStyle;
