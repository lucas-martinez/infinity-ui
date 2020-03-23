import { deepMerge } from '../../../../js/utils';
import { normalize } from '../../../pick';
import spec from '../../quantum-spec';
import defaultStyle from './default';

const accentStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: spec.global.button.backgroundColorAccentDark,
    light: spec.global.button.backgroundColorAccent,
  },
  color: {
    dark: spec.global.button.colorAccentDark,
    light: spec.global.button.colorAccent,
  },
  borderColor: {
    dark: spec.global.button.borderColorAccentDark,
    light: spec.global.button.borderColorAccent,
  },

  active: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorAccentActiveDark,
      light: spec.global.button.backgroundColorAccentActive,
    },
    color: {
      dark: spec.global.button.colorAccentActiveDark,
      light: spec.global.button.colorAccentActive,
    },
    borderColor: {
      dark: spec.global.button.borderColorAccentActiveDark,
      light: spec.global.button.borderColorAccentActive,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowAccentActiveDark,
      light: spec.global.button.boxShadowAccentActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorAccentDisabledDark,
      light: spec.global.button.backgroundColorAccentDisabled,
    },
    color: {
      dark: spec.global.button.colorAccentDisabledDark,
      light: spec.global.button.colorAccentDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorAccentFocusDark,
      light: spec.global.button.backgroundColorAccentFocus,
    },
    color: {
      dark: spec.global.button.colorAccentFocusDark,
      light: spec.global.button.colorAccentFocus,
    },
    borderColor: {
      dark: spec.global.button.backgroundColorAccentFocusDark,
      light: spec.global.button.backgroundColorAccentFocus,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowFocus,
      light: spec.global.button.boxShadowFocus
    }
  },

  hover: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorAccentDark,
      light: spec.global.button.backgroundColorAccent,
    },
    color: {
      dark: spec.global.button.colorAccentDark,
      light: spec.global.button.colorAccent,
    },
    borderColor: {
      dark: spec.global.button.backgroundColorAccentHoverDark,
      light: spec.global.button.backgroundColorAccentHover,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowAccentHoverDark,
      light: spec.global.button.boxShadowAccentHover,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorAccent),

    disabled: {
      color: normalize(spec.global.buttonDivider.colorAccentDisabled),
    }
  }
});

export default accentStyle;
