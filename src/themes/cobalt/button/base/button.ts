
import spec from '../../quantum-spec';
// import { undefinedColor } from '../../colors';

export const button = {
  borderColor: {
    dark: spec.global.button.borderColorDefaultDark,
    light: spec.global.button.borderColorDefault,
  },
  borderRadius: '0px', // spec.global.button.borderRadius,
  borderWidth: spec.global.button.borderWidth,
  boxShadow: {
    dark: spec.global.button.boxShadow,
    light: spec.global.button.boxShadow,
  },
  caret: spec.global.buttonCaret,
  fontSize: spec.global.button.fontSize,
  fontWeight: spec.global.button.fontWeight,
  height: spec.global.button.height,
  iconLabelGap: spec.global.button.iconLabelGap,
  iconLabelVerticalAlign: spec.global.button.iconLabelVerticalAlign,
  letterSpacing: spec.global.button.letterSpacing,
  // letterSpacing: spec.global.text.captionLetterSpacing,
  lineHeight: spec.global.button.lineHeight,
  margin: spec.global.button.margin,
  marginBottom: spec.global.button.marginBottom,
  marginLeft: spec.global.button.marginLeft,
  marginRight: spec.global.button.marginRight,
  marginTop: spec.global.button.marginTop,
  maxWidth: spec.global.button.maxWidth,
  minWidth: spec.global.button.minWidth,
  // padding: spec.global.button.padding,
  padding: {
    horizontal: spec.global.button.paddingLeft,
    vertical: spec.global.button.paddingBottom,
  },
  paddingBottom: spec.global.button.paddingBottom,
  paddingLeft: spec.global.button.paddingLeft,
  paddingRight: spec.global.button.paddingRight,
  paddingTop: spec.global.button.paddingTop,
  textShadow: spec.global.button.textShadow,
  textTransform: spec.global.button.textTransform,
  transition: spec.global.button.transition,

  active: {
    boxShadow: {
      dark: spec.global.button.boxShadowActive,
      light: spec.global.button.boxShadowActive,
    },
  },

  disabled: {
    boxShadow: {
      dark: spec.global.button.backgroundColorDefaultDisabledDark,
      light: spec.global.button.backgroundColorDefaultDisabled,
      // dark: undefinedColor, // spec.global.button.boxShadowDisabledDark,
      // light: undefinedColor, // spec.global.button.boxShadowDisabled,
    },
  },

  hover: {
    boxShadow: {
      dark: spec.global.button.boxShadowHoverDark,
      light: spec.global.button.boxShadowHover,
    },
  },

  focus: {
    boxShadow: {
      dark: spec.global.button.boxShadowFocus,
      light: spec.global.button.boxShadowFocus,
    },
  },
};

export default button;
