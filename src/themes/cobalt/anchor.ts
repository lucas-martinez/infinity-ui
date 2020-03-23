import spec from './quantum-spec';
import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';

export const anchor = {
  color: {
    dark: spec.global.text.anchorFontColorDark,
    light: spec.global.text.anchorFontColor
  },
  fontSize: spec.global.text.anchorFontSize,
  letterSpacing: spec.global.text.anchorLetterSpacing,
  textDecoration: spec.global.text.anchorTextDecoration,
  textTransform: spec.global.text.anchorTextTransform,

  small: {
    fontSize: spec.global.text.anchorFontSizeSmall,
  },

  hover: {
    textDecoration: spec.global.text.anchorTextDecorationHover,
  }
};

const generator: PartialThemeGenerator<'anchor'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    anchor
  };
};

export default generator;