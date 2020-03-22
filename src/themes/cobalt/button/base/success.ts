import { deepMerge } from '../../../../js/utils';
import { normalize } from '../../../pick';
import spec from '../../quantum-spec';
import defaultStyle from './default';

const successStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: spec.global.button.backgroundColorSuccessDark,
    light: spec.global.button.backgroundColorSuccess,
  },
  color: {
    dark: spec.global.button.colorSuccessDark,
    light: spec.global.button.colorSuccess,
  },
  borderColor: {
    dark: spec.global.button.borderColorSuccessDark,
    light: spec.global.button.borderColorSuccess,
  },

  active: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSuccessActiveDark,
      light: spec.global.button.backgroundColorSuccessActive,
    },
    color: {
      dark: spec.global.button.colorSuccessActiveDark,
      light: spec.global.button.colorSuccessActive,
    },
    borderColor: {
      dark: spec.global.button.borderColorSuccessActiveDark,
      light: spec.global.button.borderColorSuccessActive,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowSuccessActiveDark,
      light: spec.global.button.boxShadowSuccessActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSuccessDisabledDark,
      light: spec.global.button.backgroundColorSuccessDisabled,
    },
    color: {
      dark: spec.global.button.colorSuccessDisabledDark,
      light: spec.global.button.colorSuccessDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSuccessFocusDark,
      light: spec.global.button.backgroundColorSuccessFocus,
    },
    color: {
      dark: spec.global.button.colorSuccessFocusDark,
      light: spec.global.button.colorSuccessFocus,
    },
    borderColor: {
      dark: spec.global.button.borderColorSuccessFocusDark,
      light: spec.global.button.borderColorSuccessFocus,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowFocus,
      light: spec.global.button.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.button.backgroundColorSuccessHoverDark,
      light: spec.global.button.backgroundColorSuccessHover,
    },
    color: {
      dark: spec.global.button.colorSuccessHoverDark,
      light: spec.global.button.colorSuccessHover,
    },
    borderColor: {
      dark: spec.global.button.borderColorSuccessHoverDark,
      light: spec.global.button.borderColorSuccessHover,
    },
    boxShadow: {
      dark: spec.global.button.boxShadowSuccessHoverDark,
      light: spec.global.button.boxShadowSuccessHover,
    },
  },

  divider: {
    color: normalize(spec.global.buttonDivider.colorSuccess),
  },
});

export default successStyle;
