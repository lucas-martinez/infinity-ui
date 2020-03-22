import { deepMerge } from '../../../../js/utils';
import { normalize } from '../../../pick';
import spec from '../../quantum-spec';
import defaultStyle from './default';

const criticalStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: spec.global.button.backgroundColorWarningDark,
    light: spec.global.button.backgroundColorWarning,
  },
  color: {
    dark: spec.global.button.colorWarningDark,
    light: spec.global.button.colorWarning,
  },
  borderColor: {
    dark: spec.global.button.borderColorWarningDark,
    light: spec.global.button.borderColorWarning,
  },

  active: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorWarningActiveDark,
      light: spec.global.button.backgroundColorWarningActive,
    },
    color: {
      dark: spec.global.button.colorWarningActiveDark,
      light: spec.global.button.colorWarningActive,
    },
    borderColor: {
      dark: spec.global.button.borderColorWarningActiveDark,
      light: spec.global.button.borderColorWarningActive,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowWarningActiveDark,
      light: spec.global.button.boxShadowWarningActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorWarningDisabledDark,
      light: spec.global.button.backgroundColorWarningDisabled,
    },
    color: {
      dark: spec.global.button.colorWarningDisabledDark,
      light: spec.global.button.colorWarningDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorWarningFocusDark,
      light: spec.global.button.backgroundColorWarningFocus,
    },
    color: {
      dark: spec.global.button.colorWarningFocusDark,
      light: spec.global.button.colorWarningFocus,
    },
    borderColor: {
      dark: spec.global.button.backgroundColorWarningFocusDark,
      light: spec.global.button.backgroundColorWarningFocus,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowFocus,
      light: spec.global.button.boxShadowFocus
    }
  },

  hover: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorWarningDark,
      light: spec.global.button.backgroundColorWarning,
    },
    color: {
      dark: spec.global.button.colorWarningDark,
      light: spec.global.button.colorWarning,
    },
    borderColor: {
      dark: spec.global.button.backgroundColorWarningHoverDark,
      light: spec.global.button.backgroundColorWarningHover,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowWarningHoverDark,
      light: spec.global.button.boxShadowWarningHover,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorWarning),
  },
});

export default criticalStyle;
