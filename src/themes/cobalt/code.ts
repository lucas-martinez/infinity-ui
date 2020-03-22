import spec from './quantum-spec';
import { PartialThemeGenerator } from '.';

export const code = {
  background: {
    dark: spec.global.text.codeBackgroundColorDark,
    light: spec.global.text.codeBackgroundColor
  },
  color: {
    dark: spec.global.text.codeFontColorDark,
    light: spec.global.text.codeFontColor,
  },
  fontWeight: spec.global.text.codeFontWeight,
};

const generator: PartialThemeGenerator<'code'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    code
  };
};

export default generator;