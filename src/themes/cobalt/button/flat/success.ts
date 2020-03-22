import { normalize } from '../../../pick';
import spec from '../../quantum-spec';
import defaultStyle, { FlatButtonStyle } from './default';

export const successStyle: FlatButtonStyle = {
  ...defaultStyle,
  backgroundColor: {
    dark: spec.global.button.backgroundColorSuccessDark,
    light: spec.global.button.backgroundColorSuccess,
  },
  borderColor: {
    dark: spec.global.button.borderColorSuccessDark,
    light: spec.global.button.borderColorSuccess,
  },
  color: {
    dark: spec.global.button.colorSuccessDark,
    light: spec.global.button.colorSuccess,
  },

  active: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSuccessActiveDark,
      light: spec.global.button.backgroundColorSuccessActive,
    },
    borderColor: {
      dark: spec.global.button.borderColorSuccessActiveDark,
      light: spec.global.button.borderColorSuccessActive,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowSuccessActiveDark,
      light: spec.global.button.boxShadowSuccessActive,
    },
    color: {
      dark: spec.global.button.colorSuccessActiveDark,
      light: spec.global.button.colorSuccessActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.buttonFlat.backgroundColorSuccessDisabledDark,
      light: spec.global.buttonFlat.backgroundColorSuccessDisabled,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowSuccessDisabledDark,
      light: spec.global.buttonFlat.boxShadowSuccessDisabled,
    },
    color: {
      dark: spec.global.buttonFlat.colorSuccessDisabledDark,
      light: spec.global.buttonFlat.colorSuccessDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSuccessFocusDark,
      light: spec.global.button.backgroundColorSuccessFocus,
    },
    borderColor: {
      dark: spec.global.button.borderColorSuccessFocusDark,
      light: spec.global.button.borderColorSuccessFocus,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowFocusDark,
      light: spec.global.buttonFlat.boxShadowFocus,
    },
    color: {
      dark: spec.global.button.colorSuccessFocusDark,
      light: spec.global.button.colorSuccessFocus,
    }
  },

  hover: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSuccessHoverDark,
      light: spec.global.button.backgroundColorSuccessHover,
    },
    borderColor: {
      dark: spec.global.button.borderColorSuccessHoverDark,
      light: spec.global.button.borderColorSuccessHover,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowSuccessHoverDark,
      light: spec.global.button.boxShadowSuccessHover,
    },
    color: {
      dark: spec.global.button.colorSuccessHoverDark,
      light: spec.global.button.colorSuccessHover,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorSuccess),
  },
};

export default successStyle;
