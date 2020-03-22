import { normalize } from '../../../pick';
import ColorScheme from '../../ColorScheme';
import spec from '../../quantum-spec';
import baseStyle from '../base/default';

export interface NoBorderColorScheme
  extends Pick<ColorScheme, 'backgroundColor' | 'boxShadow' | 'color'> {}

export interface OptionalBorderColorScheme
  extends NoBorderColorScheme,
    Partial<Pick<ColorScheme, 'borderColor'>> {}

export interface FlatButtonStyle extends OptionalBorderColorScheme {
  borderRadius: string;
  borderStyle: string;
  fontSize: string;
  fontWeight: string;
  height: string;
  iconLabelGap: string;
  iconLabelVerticalAlign: string;
  letterSpacing: string;
  lineHeight: string;
  margin: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  marginTop: string;
  maxWidth: string;
  minWidth: string;
  padding: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  textShadow: string;
  textTransform: string;
  transition: string;

  active: OptionalBorderColorScheme;
  disabled?: OptionalBorderColorScheme;
  focus: ColorScheme;
  hover: OptionalBorderColorScheme;

  divider: {
    color: normalize;

    disabled?: {
      color: normalize;
    };
  };
}

export const defaultStyle: FlatButtonStyle = {
  backgroundColor: baseStyle.backgroundColor,
  borderColor: baseStyle.borderColor,
  borderRadius: spec.global.buttonFlat.borderRadius,
  borderStyle: spec.global.buttonFlat.border,
  boxShadow: {
    dark: spec.global.buttonFlat.boxShadow,
    light: spec.global.buttonFlat.boxShadow,
  },
  color: baseStyle.color,
  fontSize: spec.global.buttonFlat.fontSize,
  fontWeight: spec.global.buttonFlat.fontWeight,
  height: spec.global.buttonFlat.height,
  iconLabelGap: spec.global.buttonFlat.iconLabelGap,
  iconLabelVerticalAlign: spec.global.buttonFlat.iconLabelVerticalAlign,
  letterSpacing: spec.global.buttonFlat.letterSpacing,
  lineHeight: spec.global.buttonFlat.lineHeight,
  margin: spec.global.buttonFlat.margin,
  marginBottom: spec.global.buttonFlat.marginBottom,
  marginLeft: spec.global.buttonFlat.marginLeft,
  marginRight: spec.global.buttonFlat.marginRight,
  marginTop: spec.global.buttonFlat.marginTop,
  maxWidth: spec.global.buttonFlat.maxWidth,
  minWidth: spec.global.buttonFlat.minWidth,
  padding: spec.global.buttonFlat.padding,
  paddingBottom: spec.global.buttonFlat.paddingBottom,
  paddingLeft: spec.global.buttonFlat.paddingLeft,
  paddingRight: spec.global.buttonFlat.paddingRight,
  paddingTop: spec.global.buttonFlat.paddingTop,
  textShadow: spec.global.buttonFlat.textShadow,
  textTransform: spec.global.buttonFlat.textTransform,
  transition: spec.global.buttonFlat.transition,

  active: {
    backgroundColor: baseStyle.active.backgroundColor,
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowActiveDark,
      light: spec.global.buttonFlat.boxShadowActive,
    },
    color: baseStyle.active.color,
  },

  focus: {
    backgroundColor: baseStyle.focus.backgroundColor,
    borderColor: {
      dark: spec.global.buttonFlat.borderColorFocusDark,
      light: spec.global.buttonFlat.borderColorFocus,
    },
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowFocusDark,
      light: spec.global.buttonFlat.boxShadowFocus,
    },
    color: baseStyle.focus.color,
  },

  hover: {
    backgroundColor: baseStyle.hover.backgroundColor,
    boxShadow: {
      dark: spec.global.buttonFlat.boxShadowHoverDark,
      light: spec.global.buttonFlat.boxShadowHover,
    },
    color: baseStyle.hover.color,
  },

  divider: {
    color: {
      dark: spec.global.buttonFlatDivider.colorDark,
      light: spec.global.buttonFlatDivider.color,
    },
  },
};

export default defaultStyle;
