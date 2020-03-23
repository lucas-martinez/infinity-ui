import spec from './quantum-spec';
import { PartialThemeGenerator } from '.';

export const text = {
  // fontSize: spec.global.text.fontSize,
  fontWeight: spec.global.text.fontWeight,
  // fontStyle: spec.global.text.fontStyle,
  letterSpacing: spec.global.text.letterSpacing,
  lineHeight: spec.global.text.lineHeight,

  medium: {
    fontWeight: spec.global.text.fontWeightMedium,
  },
  bold: {
    fontWeight: spec.global.text.fontWeightBold,
  },
  semiBold: {
    fontWeight: spec.global.text.fontWeightSemiBold,
  },
  small: {
    fontSize: spec.global.text.fontSizeSmall,
  },
  large: {
    fontSize: spec.global.text.fontSizeLarge,
  },

  body: {
    fontSize: spec.global.text.bodyFontSize,
    // fontStyle: spec.global.text.bodyFontStyle,
    // fontWeight: spec.global.text.bodyFontWeight,
  },

  caption: {
    fontSize: spec.global.text.captionFontSize,
    fontWeight: spec.global.text.captionFontWeight,
    textTransform: spec.global.text.captionTextTransform,
    letterSpacing: spec.global.text.captionLetterSpacing,
  },

  code: {
    backgroundColor: {
      dark: spec.global.text.codeBackgroundColorDark,
      light: spec.global.text.codeBackgroundColor
    }
  },

  disabled: {
    color: {
      dark: spec.global.color.textDisabled,
      light: spec.global.color.textDisabledDark,
    },
  },

  emphasis: {
    color: {
      dark: spec.global.color.textEmphasis,
      light: spec.global.color.textEmphasisDark,
    },
  },

  headline1: {
    fontSize: spec.global.text.headline1FontMarginBottom,
    fontStyle: spec.global.text.headline1FontStyle,
    fontWeight: spec.global.text.headline1FontWeight,
    letterSpacing: spec.global.text.headline1LetterSpacing,
    marginTop: spec.global.text.headline1FontMarginTop,
    marginBottom: spec.global.text.headline1FontMarginBottom,
    textTransform: spec.global.text.headline1TextTransform,

    bold: {
      fontWeight: spec.global.text.headline1FontWeightBold,
    },
  },

  headline2: {
    fontSize: spec.global.text.headline2FontMarginBottom,
    fontStyle: spec.global.text.headline2FontStyle,
    fontWeight: spec.global.text.headline2FontWeight,
    letterSpacing: spec.global.text.headline2LetterSpacing,
    marginTop: spec.global.text.headline2FontMarginTop,
    marginBottom: spec.global.text.headline2FontMarginBottom,
    textTransform: spec.global.text.headline2TextTransform,

    bold: {
      fontWeight: spec.global.text.headline2FontWeightBold,
    },
  },

  headline3: {
    fontSize: spec.global.text.headline3FontMarginBottom,
    fontStyle: spec.global.text.headline3FontStyle,
    fontWeight: spec.global.text.headline3FontWeight,
    letterSpacing: spec.global.text.headline3LetterSpacing,
    marginTop: spec.global.text.headline3FontMarginTop,
    marginBottom: spec.global.text.headline3FontMarginBottom,
    textTransform: spec.global.text.headline3TextTransform,

    bold: {
      fontWeight: spec.global.text.headline3FontWeightBold,
    },
  },

  headline4: {
    fontSize: spec.global.text.headline4FontMarginBottom,
    fontStyle: spec.global.text.headline4FontStyle,
    fontWeight: spec.global.text.headline4FontWeight,
    letterSpacing: spec.global.text.headline4LetterSpacing,
    marginTop: spec.global.text.headline4FontMarginTop,
    marginBottom: spec.global.text.headline4FontMarginBottom,
    textTransform: spec.global.text.headline4TextTransform,

    bold: {
      fontWeight: spec.global.text.headline4FontWeightBold,
    },
  },

  headline5: {
    fontSize: spec.global.text.headline5FontMarginBottom,
    fontStyle: spec.global.text.headline5FontStyle,
    fontWeight: spec.global.text.headline5FontWeight,
    letterSpacing: spec.global.text.headline5LetterSpacing,
    marginTop: spec.global.text.headline5FontMarginTop,
    marginBottom: spec.global.text.headline5FontMarginBottom,
    textTransform: spec.global.text.headline5TextTransform,

    bold: {
      fontWeight: spec.global.text.headline5FontWeightBold,
    },
  },

  headline6: {
    fontSize: spec.global.text.headline6FontMarginBottom,
    fontStyle: spec.global.text.headline6FontStyle,
    fontWeight: spec.global.text.headline6FontWeight,
    // letterSpacing: spec.global.text.headline6LetterSpacing,
    marginTop: spec.global.text.headline6FontMarginTop,
    marginBottom: spec.global.text.headline6FontMarginBottom,
    textTransform: spec.global.text.headline6TextTransform,

    bold: {
      fontWeight: spec.global.text.headline6FontWeightBold,
    },
  },

  helpBlock: {
    color: {
      dark: spec.global.text.helpBlockColorDark,
      light: spec.global.text.helpBlockColor,
    },
    fontSize: spec.global.text.helpBlockFontSize,
    fontStyle: spec.global.text.helpBlockFontStyle,
    fontWeight: spec.global.text.helpBlockFontWeight,
    marginTop: spec.global.text.helpBlockMarginTop,
    marginBottom: spec.global.text.helpBlockMarginBottom,
  },

  html: {
    fontSize: spec.global.text.htmlFontSize,
    // fontStyle: spec.global.text.htmlFontStyle,
    // fontWeight: spec.global.text.htmlFontWeight,
  },

  muted: {
    color: {
      dark: spec.global.color.textMuted,
      light: spec.global.color.textMutedDark,
    },
  },

  title: {
    fontSize: spec.global.text.titleFontSize,
    fontStyle: spec.global.text.titleFontStyle,
    fontWeight: spec.global.text.titleFontWeight,
    textTransform: spec.global.text.titleTextTransform,
  },

  required: {
    color: spec.global.text.fontColorRequired,
    content: spec.global.text.contentRequired,
    fontSize: spec.global.text.fontSizeRequired,
  },

  navigation: {
    primary: {
      fontSize: spec.global.text.navigationPrimaryFontSize,
      fontWeight: spec.global.text.navigationPrimaryFontWeight,
      fontStyle: spec.global.text.navigationPrimaryFontStyle,
      textTransform: spec.global.text.navigationPrimaryTextTransform,
      letterSpacing: spec.global.text.navigationPrimaryLetterSpacing,
      active: {
        fontWeight: spec.global.text.navigationPrimaryFontWeightActive,
      },
    },
    secondary: {
      fontSize: spec.global.text.navigationSecondaryFontSize,
      fontWeight: spec.global.text.navigationSecondaryFontWeight,
      fontStyle: spec.global.text.navigationSecondaryFontStyle,
      textTransform: spec.global.text.navigationSecondaryTextTransform,
      letterSpacing: spec.global.text.navigationSecondaryLetterSpacing,
    },
  },

  primary: {
    color: {
      dark: spec.global.color.textPrimaryDark,
      light: spec.global.color.textPrimary,
    },
  },

  secondary: {
    color: {
      dark: spec.global.color.textSecondaryDark,
      light: spec.global.color.textSecondary,
    },
    fontSize: spec.global.text.secondaryFontSize,
    fontStyle: spec.global.text.secondaryFontStyle,
    fontWeight: spec.global.text.secondaryFontWeight,
    textTransform: spec.global.text.secondaryTextTransform,
  },

  selection: {
    background: {
      dark: spec.global.text.backgroundColorSelectionDark,
      light: spec.global.text.backgroundColorSelection,
    },
    color: {
      dark: spec.global.text.colorSelectionDark,
      light: spec.global.text.colorSelection,
    },
  },

  tooltip: {
    fontSize: spec.global.text.tooltipFontSize,
  },
};

const generator: PartialThemeGenerator<'text'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    text,
  };
};

export default generator;
