import { normalize } from '../../../pick';
import { undefinedColor } from '../../colors';
import spec from '../../quantum-spec';
import defaultStyle, { FlatButtonStyle } from './default';

const criticalStyle: FlatButtonStyle = {
  ...defaultStyle,
  backgroundColor: {
    dark: spec.global.buttonFlat.backgroundColorWarningDark,
    light: spec.global.buttonFlat.backgroundColorWarning,
  },
  color: {
    dark: spec.global.buttonFlat.colorWarningDark,
    light: spec.global.buttonFlat.colorWarning,
  },

  active: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorWarningActiveDark,
      light: spec.global.buttonFlat.backgroundColorWarningActive,
    },
    color: {
      dark: spec.global.buttonFlat.colorWarningActiveDark,
      light: spec.global.buttonFlat.colorWarningActive,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowWarningActiveDark,
      light: spec.global.buttonFlat.boxShadowWarningActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorWarningDisabledDark,
      light: spec.global.buttonFlat.backgroundColorWarningDisabled,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowWarningDisabledDark,
      light: spec.global.buttonFlat.boxShadowWarningDisabled,
    },
    color: {
      dark: spec.global.buttonFlat.colorWarningDisabledDark,
      light: spec.global.buttonFlat.colorWarningDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorWarningFocusDark,
      light: spec.global.buttonFlat.backgroundColorWarningFocus,
    },
    color: {
      dark: spec.global.buttonFlat.colorWarningFocusDark,
      light: spec.global.buttonFlat.colorWarningFocus,
    },
    borderColor: {
      dark: spec.global.buttonFlat.backgroundColorWarningFocusDark,
      light: spec.global.buttonFlat.backgroundColorWarningFocus,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowFocusDark,
      light: spec.global.buttonFlat.boxShadowFocus
    }
  },

  hover: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorWarningDark,
      light: spec.global.buttonFlat.backgroundColorWarning,
    },
    color: {
      dark: spec.global.buttonFlat.colorWarningDark,
      light: spec.global.buttonFlat.colorWarning,
    },
    borderColor: {
      dark: spec.global.buttonFlat.backgroundColorWarningHoverDark,
      light: spec.global.buttonFlat.backgroundColorWarningHover,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowWarningHoverDark,
      light: spec.global.buttonFlat.boxShadowWarningHover,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorWarning),

    disabled: {
      color: undefinedColor,
    },
  },
};

export default criticalStyle;
