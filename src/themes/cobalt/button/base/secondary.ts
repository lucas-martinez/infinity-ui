import { deepMerge } from '../../../../js/utils';
import { normalize } from '../../../pick';
import spec from '../../quantum-spec';
import defaultStyle from './default';

const secondaryStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: spec.global.button.backgroundColorSecondaryDark,
    light: spec.global.button.backgroundColorSecondary,
  },
  color: {
    dark: spec.global.button.colorSecondaryDark,
    light: spec.global.button.colorSecondary,
  },
  borderColor: {
    dark: spec.global.button.borderColorSecondaryDark,
    light: spec.global.button.borderColorSecondary,
  },

  active: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSecondaryActiveDark,
      light: spec.global.button.backgroundColorSecondaryActive,
    },
    color: {
      dark: spec.global.button.colorSecondaryActiveDark,
      light: spec.global.button.colorSecondaryActive,
    },
    borderColor: {
      dark: spec.global.button.borderColorSecondaryActiveDark,
      light: spec.global.button.borderColorSecondaryActive,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowSecondaryActiveDark,
      light: spec.global.button.boxShadowSecondaryActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSecondaryDisabledDark,
      light: spec.global.button.backgroundColorSecondaryDisabled,
    },
    color: {
      dark: spec.global.button.colorSecondaryDisabledDark,
      light: spec.global.button.colorSecondaryDisabled,
    }
  },

  focus: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSecondaryFocusDark,
      light: spec.global.button.backgroundColorSecondaryFocus,
    },
    color: {
      dark: spec.global.button.colorSecondaryFocusDark,
      light: spec.global.button.colorSecondaryFocus,
    },
    borderColor: {
      dark: spec.global.button.borderColorSecondaryFocusDark,
      light: spec.global.button.borderColorSecondaryFocus,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowFocus,
      light: spec.global.button.boxShadowFocus
    }
  },

  hover: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSecondaryHoverDark,
      light: spec.global.button.backgroundColorSecondaryHover,
    },
    color: {
      dark: spec.global.button.colorSecondaryHoverDark,
      light: spec.global.button.colorSecondaryHover,
    },
    borderColor: {
      dark: spec.global.button.borderColorSecondaryHoverDark,
      light: spec.global.button.borderColorSecondaryHover,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowSecondaryHoverDark,
      light: spec.global.button.boxShadowSecondaryHover,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorSecondary),

    disabled: {
      color: normalize(spec.global.buttonDivider.colorSecondaryDisabled),
    }
  }
});

export default secondaryStyle;