import { PartialThemeGenerator } from '.';
import { ColorType } from '../../js/utils';
import spec from './quantum-spec';

export const alert = {
  border: spec.global.alert.border,
  borderRadius: spec.global.alert.borderRadius,
  color: {
    dark: spec.global.alert.colorDark,
    light: spec.global.alert.color,
  },
  fontSize: spec.global.alert.fontSize,
  fontWeight: spec.global.alert.fontWeight,
  marginTop: spec.global.alert.marginTop,
  marginBottom: spec.global.alert.marginBottom,
  minHeight: spec.global.alert.minHeight,
  offset: spec.global.alert.offset,
  padding: spec.global.alert.padding,
  paddingBottom: spec.global.alert.paddingBottom,
  paddingHorizontal: spec.global.alert.paddingHorizontal,
  paddingLeft: spec.global.alert.paddingLeft,
  paddingRight: spec.global.alert.paddingRight,
  paddingTop: spec.global.alert.paddingTop,
  paddingVertical: spec.global.alert.paddingVertical,
  textAlign: spec.global.alert.textAlign,
  textShadow: spec.global.alert.textShadow,
  width: spec.global.alert.width,

  close: {
    fontSize: spec.global.alertClose.fontSize,
    fontWeight: spec.global.alertClose.fontWeight,
    opacity: spec.global.alertClose.opacity,
    right: spec.global.alertClose.right,
    top: spec.global.alertClose.top,

    hover: {
      color: {
        dark: spec.global.alertClose.colorHoverDark,
        light: spec.global.alertClose.colorHover
      },
      opacity: spec.global.alertClose.opacityHover
    }
  },

  headline: {
    marginTop: spec.global.alertHeadline.marginTopLg,
  },

  icon: {
    height: spec.global.alertIcon.height,
    marginBottom: spec.global.alertIcon.marginBottom,
    marginLeft: spec.global.alertIcon.marginLeft,
    marginRight: spec.global.alertIcon.marginRight,
    marginTop: spec.global.alertIcon.marginTop,
    width: spec.global.alertIcon.width,
  },

  link: {
    opacity: spec.global.alertLink.opacity,
    textDecoration: spec.global.alertLink.textDecorationHover,

    hover: {
      opacity: spec.global.alertLink.opacityHover,
      textDecoration: spec.global.alertLink.textDecorationHover,
    },
  },

  message: {
    marginBottom: spec.global.alertInputMessage.marginBottom,
    marginTop: spec.global.alertInputMessage.marginTop,
  },

  tooltip: {
    arrow: spec.global.alertTooltipArrow,
  },
};

export type AlertTheme = Omit<Partial<typeof alert>, 'icon' | 'link' | 'tooltip'> & {
  backgroundColor?: ColorType;
  depth?: string;
  icon?: Partial<typeof alert.icon> & {
    image?: ColorType;
  };
  linkColor?: ColorType;
  position?: string;
  positionBottom?: string;
  positionTop?: string;
  positionLeft?: string;
  positionRight?: string;
  tooltipBorderColor?: ColorType;
  zIndex?: string;
};

export const alertLarge: Partial<AlertTheme> = {
  fontSize: spec.global.alert.fontSizeLg,
  headline: {
    marginTop: spec.global.alertHeadline.marginTopLg,
  },
  icon: {
    marginBottom: spec.global.alertIcon.marginBottomLg,
    marginLeft: spec.global.alertIcon.marginLeftLg,
    marginRight: spec.global.alertIcon.marginRightLg,
    marginTop: spec.global.alertIcon.marginTopLg,
    width: spec.global.alertIcon.widthLg,
  },
  marginTop: spec.global.alert.marginTopLg,
  minHeight: spec.global.alert.minHeightLg,
  padding: spec.global.alert.paddingLg,
  paddingBottom: spec.global.alert.paddingBottomLg,
  paddingLeft: spec.global.alert.paddingLeftLg,
  paddingRight: spec.global.alert.paddingRightLg,
  paddingTop: spec.global.alert.paddingTopLg,
};

export const alertGeneral: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alertGeneral.backgroundColor,
    light: spec.global.alertGeneral.backgroundColor,
  },
  color: {
    dark: spec.global.alertGeneral.color,
    light: spec.global.alertGeneral.color,
  },
  /*
  icons: {
    danger: spec.global.alert.iconGeneralDanger,
    info: spec.global.alert.iconGeneralInfo,
    warning: spec.global.alert.iconGeneralWarning
  },
  */
  width: spec.global.alertGeneral.width,
  position: spec.global.alertGeneral.position,
  positionTop: spec.global.alertGeneral.positionTop,
  positionLeft: spec.global.alertGeneral.positionLeft,
  positionRight: spec.global.alertGeneral.positionRight,
  marginTop: spec.global.alertGeneral.marginTop,
  paddingTop: spec.global.alertGeneral.paddingTop,
  paddingBottom: spec.global.alertGeneral.paddingBottom,
  paddingLeft: spec.global.alertGeneral.paddingLeft,
  paddingRight: spec.global.alertGeneral.paddingRight,
  zIndex: spec.global.alertGeneral.zIndex,
};

export const alertDanger: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorDangerDark,
    light: spec.global.alert.backgroundColorDanger,
  },
  color: {
    dark: spec.global.alert.colorDangerDark,
    light: spec.global.alert.colorDanger,
  },
  icon: {
    image: {
      dark: spec.global.alertIconDangerDark,
      light: spec.global.alertIconDanger,
    },
  },
  linkColor: {
    dark: spec.global.alertLink.colorDangerDark,
    light: spec.global.alertLink.colorDanger,
  },
  tooltipBorderColor: {
    dark: spec.global.alertTooltip.borderColorErrorDark,
    light: spec.global.alertTooltip.borderColorError,
  },
};

export const alertError: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorErrorDark,
    light: spec.global.alert.backgroundColorError,
  },
  color: {
    dark: spec.global.alert.colorErrorDark,
    light: spec.global.alert.colorError,
  },
  icon: {
    image: {
      dark: spec.global.alertIconDangerDark,
      light: spec.global.alertIconDanger,
    },
  },
  linkColor: {
    dark: spec.global.alertLink.colorDangerDark,
    light: spec.global.alertLink.colorDanger,
  },
  tooltipBorderColor: {
    dark: spec.global.alertTooltip.borderColorErrorDark,
    light: spec.global.alertTooltip.borderColorError,
  },
};

export const alertInfo: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorInfoDark,
    light: spec.global.alert.backgroundColorInfo,
  },
  color: {
    dark: spec.global.alert.colorInfoDark,
    light: spec.global.alert.colorInfo,
  },
  icon: {
    image: {
      dark: spec.global.alertIconInfoDark,
      light: spec.global.alertIconInfo,
    },
  },
  linkColor: {
    dark: spec.global.alertLink.colorInfoDark,
    light: spec.global.alertLink.colorInfo,
  },
  tooltipBorderColor: {
    dark: spec.global.alertTooltip.borderColorInfoDark,
    light: spec.global.alertTooltip.borderColorInfo,
  },
};

export const alertSuccess: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorSuccessDark,
    light: spec.global.alert.backgroundColorSuccess,
  },
  color: {
    dark: spec.global.alert.colorSuccessDark,
    light: spec.global.alert.colorSuccess,
  },
  icon: {
    image: {
      dark: spec.global.alertIconSuccessDark,
      light: spec.global.alertIconSuccess,
    },
  },
  linkColor: {
    dark: spec.global.alertLink.colorSuccessDark,
    light: spec.global.alertLink.colorSuccess,
  },
  tooltipBorderColor: {
    dark: spec.global.alertTooltip.borderColorSuccessDark,
    light: spec.global.alertTooltip.borderColorSuccess,
  },
};

export const alertWarning: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorWarningDark,
    light: spec.global.alert.backgroundColorWarning,
  },
  color: {
    dark: spec.global.alert.colorWarningDark,
    light: spec.global.alert.colorWarning,
  },
  icon: {
    image: {
      dark: spec.global.alertIconWarningDark,
      light: spec.global.alertIconWarning,
    },
  },
  linkColor: {
    dark: spec.global.alertLink.colorWarningDark,
    light: spec.global.alertLink.colorWarning,
  },
  tooltipBorderColor: {
    dark: spec.global.alertTooltip.borderColorWarningDark,
    light: spec.global.alertTooltip.borderColorWarning,
  },
};

export const alertInverse: Partial<AlertTheme> = {
  marginBottom: spec.global.alert.marginBottomInverse,
  marginTop: spec.global.alert.marginTopInverse,
  minHeight: spec.global.alert.minHeightInverse,
  padding: spec.global.alert.paddingInverse,
  paddingBottom: spec.global.alert.paddingBottomInverse,
  paddingLeft: spec.global.alert.paddingLeftInverse,
  paddingRight: spec.global.alert.paddingRightInverse,
  paddingTop: spec.global.alert.paddingTopInverse,
};

export const alertInverseCrossInterface: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorCrossInterfaceInverseDark,
    light: spec.global.alert.backgroundColorCrossInterfaceInverse,
  },
  color: {
    dark: spec.global.alert.colorCrossInterfaceInverseDark,
    light: spec.global.alert.colorCrossInterfaceInverse,
  },
};

export const alertInverseDanger: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorDangerInverseDark,
    light: spec.global.alert.backgroundColorDangerInverse,
  },
  color: {
    dark: spec.global.alert.colorDangerInverseDark,
    light: spec.global.alert.colorDangerInverse,
  },
  icon: {
    image: {
      dark: spec.global.alertIconDangerInverseDark,
      light: spec.global.alertIconDangerInverse,
    },
  },
};

export const alertInverseError: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorInverseErrorDark,
    light: spec.global.alert.backgroundColorInverseError,
  },
  color: {
    dark: spec.global.alert.colorInverseErrorDark,
    light: spec.global.alert.colorInverseError,
  },
};

export const alertInverseInfo: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorInfoInverseDark,
    light: spec.global.alert.backgroundColorInfoInverse,
  },
  color: {
    dark: spec.global.alert.colorInfoInverseDark,
    light: spec.global.alert.colorInfoInverse,
  },
  icon: {
    image: {
      dark: spec.global.alertIconInfoInverseDark,
      light: spec.global.alertIconInfoInverse,
    },
  },
  tooltipBorderColor: {
    dark: spec.global.alertTooltip.borderColorInfoDark,
    light: spec.global.alertTooltip.borderColorInfo,
  },
};

export const alertInverseSuccess: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorSuccessInverseDark,
    light: spec.global.alert.backgroundColorSuccessInverse,
  },
  color: {
    dark: spec.global.alert.colorSuccessInverseDark,
    light: spec.global.alert.colorSuccessInverse,
  },
  icon: {
    image: {
      dark: spec.global.alertIconSuccessInverseDark,
      light: spec.global.alertIconSuccessInverse,
    },
  },
};

export const alertInverseWarning: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorWarningInverseDark,
    light: spec.global.alert.backgroundColorWarningInverse,
  },
  color: {
    dark: spec.global.alert.colorWarningInverseDark,
    light: spec.global.alert.colorWarningInverse,
  },
  icon: {
    image: {
      dark: spec.global.alertIconWarningInverseDark,
      light: spec.global.alertIconWarningInverse,
    },
  },
};

export const alertOverlay: Partial<AlertTheme> = {
  backgroundColor: {
    dark: spec.global.alert.backgroundColorOverlayDark,
    light: spec.global.alert.backgroundColorOverlay,
  },
  padding: spec.global.alert.paddingOverlay,
  depth: spec.global.alert.depthOverlay,
  zIndex: spec.global.alert.zIndexOverlay,
};

const generator: PartialThemeGenerator<
  | 'alert'
  | 'alertDanger'
  | 'alertError'
  | 'alertGeneral'
  | 'alertInfo'
  | 'alertInverse'
  | 'alertInverseCrossInterface'
  | 'alertInverseDanger'
  | 'alertInverseError'
  | 'alertInverseInfo'
  | 'alertInverseSuccess'
  | 'alertInverseWarning'
  | 'alertLarge'
  | 'alertGeneral'
  | 'alertOverlay'
  | 'alertSuccess'
  | 'alertWarning'
> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    alert,
    alertError,
    alertDanger,
    alertGeneral,
    alertInfo,
    alertInverse,
    alertInverseCrossInterface,
    alertInverseDanger,
    alertInverseError,
    alertInverseInfo,
    alertInverseSuccess,
    alertInverseWarning,
    alertLarge,
    alertOverlay,
    alertSuccess,
    alertWarning
  };
};

export default generator;