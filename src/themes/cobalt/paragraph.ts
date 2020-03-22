import { PartialTheme, PartialThemeGenerator } from '.';
import spec from './quantum-spec';

export const paragraph = {
  fontSize: spec.global.text.paragraphFontSize,
  fontStyle: spec.global.text.paragraphFontStyle,
  fontWeight: spec.global.text.paragraphFontWeight,
  letterSpacing: spec.global.text.paragraphLetterSpacing,
  lineHeight: spec.global.text.paragraphLineHeight,
  marginBottom: spec.global.text.paragraphMarginBottom,
  
  bold: {
    fontWeight: spec.global.text.paragraphFontWeightBold,
  },
  italic: {
    fontStyle: spec.global.text.paragraphFontStyleItalic,
  },
  small: {
    fontSize: spec.global.text.paragraphFontSizeSmall,
    lineHeight: spec.global.text.paragraphLineHeightSmall,
    letterSpacing: spec.global.text.paragraphLetterSpacingSmall
  },
  large: {
    fontSize: spec.global.text.paragraphFontSizeLg,
    lineHeight: spec.global.text.paragraphLineHeightLg,
    letterSpacing: spec.global.text.paragraphLetterSpacingLg
  }
};

const generator: PartialThemeGenerator<'paragraph'> = ({ baseSpacing = 24, scale = 6 }): PartialTheme<'paragraph'> => {
  return {
    paragraph: {
      
    }
  };
};

export default generator;