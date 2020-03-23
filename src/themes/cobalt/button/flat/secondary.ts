import { normalize } from '../../../pick';
import spec from '../../quantum-spec';
import defaultStyle, { FlatButtonStyle } from './default';

export const secondaryStyle: FlatButtonStyle = {
  ...defaultStyle,
  backgroundColor: {
    dark: spec.global.buttonFlat.backgroundColorSecondaryDark,
    light: spec.global.buttonFlat.backgroundColorSecondary,
  },
  color: {
    dark: spec.global.buttonFlat.colorSecondaryDark,
    light: spec.global.buttonFlat.colorSecondary,
  },

  active: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorSecondaryActiveDark,
      light: spec.global.buttonFlat.backgroundColorSecondaryActive,
    },
    color: {
      dark: spec.global.buttonFlat.colorSecondaryActiveDark,
      light: spec.global.buttonFlat.colorSecondaryActive,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowSecondaryActiveDark,
      light: spec.global.buttonFlat.boxShadowSecondaryActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorSecondaryDisabledDark,
      light: spec.global.buttonFlat.backgroundColorSecondaryDisabled,
    },
    color: {
      dark: spec.global.buttonFlat.colorSecondaryDisabledDark,
      light: spec.global.buttonFlat.colorSecondaryDisabled,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowSecondaryDisabledDark,
      light: spec.global.buttonFlat.boxShadowSecondaryDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorSecondaryFocusDark,
      light: spec.global.buttonFlat.backgroundColorSecondaryFocus,
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
      dark: spec.global.buttonFlat.colorSecondaryFocusDark,
      light: spec.global.buttonFlat.colorSecondaryFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorSecondaryHoverDark,
      light: spec.global.buttonFlat.backgroundColorSecondaryHover,
    },
    color: {
      dark: spec.global.buttonFlat.colorSecondaryHoverDark,
      light: spec.global.buttonFlat.colorSecondaryHover,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowSecondaryHoverDark,
      light: spec.global.buttonFlat.boxShadowSecondaryHover,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorSecondary),

    disabled: {
      color: normalize(spec.global.buttonDivider.colorSecondaryDisabled),
    },
  },
};

export default secondaryStyle;
