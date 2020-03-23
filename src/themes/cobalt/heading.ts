import { HeadingProps } from '../../js';
import { css } from 'styled-components';
import { Extend, PartialThemeGenerator } from '.';
import spec from './quantum-spec';

interface HeadingSpec {
  color?: {
    dark: string;
    light: string;
  }
  fontSize: string,
  fontStyle: string,
  fontWeight: string,
  letterSpacing?: string,
  textTransform: string,

  bold: {
    fontWeight: string;
  }
}

export const heading: Record<1 | 2 | 3 | 4 | 5 | 6, HeadingSpec> = {
  1: {
    // color: spec.global.text.headline1FontColor,
    fontSize: spec.global.text.headline1FontSize,
    fontStyle: spec.global.text.headline1FontStyle,
    fontWeight: spec.global.text.headline1FontWeight,
    letterSpacing: spec.global.text.headline1LetterSpacing,
    textTransform: spec.global.text.headline1TextTransform,

    bold: {
      fontWeight: spec.global.text.headline1FontWeightBold,
    }
  },
  2: {
    // color: spec.global.text.headline2FontColor,
    fontSize: spec.global.text.headline2FontSize,
    fontStyle: spec.global.text.headline2FontStyle,
    fontWeight: spec.global.text.headline2FontWeight,
    letterSpacing: spec.global.text.headline2LetterSpacing,
    textTransform: spec.global.text.headline2TextTransform,

    bold: {
      fontWeight: spec.global.text.headline2FontWeightBold,
    }
  },
  3: {
    fontSize: spec.global.text.headline3FontSize,
    fontStyle: spec.global.text.headline3FontStyle,
    fontWeight: spec.global.text.headline3FontWeight,
    letterSpacing: spec.global.text.headline3LetterSpacing,
    textTransform: spec.global.text.headline3TextTransform,

    bold: {
      fontWeight: spec.global.text.headline3FontWeightBold,
    }
  },
  4: {
    // color: spec.global.text.headline4FontColor,
    fontSize: spec.global.text.headline4FontSize,
    fontStyle: spec.global.text.headline4FontStyle,
    fontWeight: spec.global.text.headline4FontWeight,
    letterSpacing: spec.global.text.headline4LetterSpacing,
    textTransform: spec.global.text.headline4TextTransform,

    bold: {
      fontWeight: spec.global.text.headline4FontWeightBold,
    }
  },
  5: {
    color: {
      dark: spec.global.text.headline5FontColorDark,
      light: spec.global.text.headline5FontColor,
    },
    fontSize: spec.global.text.headline5FontSize,
    fontStyle: spec.global.text.headline5FontStyle,
    fontWeight: spec.global.text.headline5FontWeight,
    letterSpacing: spec.global.text.headline5LetterSpacing,
    textTransform: spec.global.text.headline5TextTransform,

    bold: {
      fontWeight: spec.global.text.headline5FontWeightBold,
    }
  },
  6: {
    color: {
      dark: spec.global.text.headline6FontColorDark,
      light: spec.global.text.headline6FontColor,
    },
    fontSize: spec.global.text.headline6FontSize,
    fontStyle: spec.global.text.headline6FontStyle,
    fontWeight: spec.global.text.headline6FontWeight,
    // letterSpacing: spec.global.text.headline6LetterSpacing,
    textTransform: spec.global.text.headline6TextTransform,

    bold: {
      fontWeight: spec.global.text.headline6FontWeightBold,
    }
  }
}

const generator: PartialThemeGenerator<'heading'> = ({ baseSpacing = 24, scale = 6 }) => {
  const baseFontSize = baseSpacing * 0.75; // 18
  const fontScale = baseSpacing / scale; // 4

  const fontSizing = (factor, { font }: any): any => ({
    size: `${baseFontSize + factor * fontScale}px`,
    height: `${baseSpacing + factor * fontScale}px`,
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`,
  });
  
  const level = ({ color, bold, fontSize, fontStyle, fontWeight, textTransform }: any): any => {
    const s = {
      color,
      bold,
      font: {
        size: fontSize,
        style: fontStyle,
        weight: fontWeight,
      },
      textTransform,
    };
    return {
      color,
      bold,
      font: {
        size: fontSize,
        style: fontStyle,
        weight: fontWeight,
      },
      textTransform,
      small: { ...fontSizing(1, s) },
      medium: { ...fontSizing(2, s) },
      large: { ...fontSizing(4, s) },
      xlarge: { ...fontSizing(6, s) },
    };
  }

  return {
    heading: {
      extend: css<HeadingProps>`
        ${props => {
          const {
            bold,
            fontSize,
            fontStyle,
            fontWeight,
            letterSpacing,
            textTransform
          } = heading[props.level || 1];
          return `
            font-weight: ${fontWeight};
            font-style: ${fontStyle};
            text-transform: ${textTransform};
            letter-spacing: ${letterSpacing};
            font-size: ${fontSize};
            > b, > strong {
              font-weight: ${bold.fontWeight};
            }`
          }
        };
      `,
      /*
      level: {
        1: level(headingSpec[1]),
        2: level(headingSpec[2]),
        3: level(headingSpec[3]),
        4: level(headingSpec[4]),
        5: level(headingSpec[5]),
        6: level(headingSpec[6])
      }*/
    }
  };
};

export default generator;

export interface Heading {
  extend?: Extend;
  font?: {
    family?: string;
    weight?: string;
  };
  level?: {
    1?: {
      font?: {};
      small?: {
        size?: string;
        height?: string;
        maxWidthheadin?: string;
      };
      medium?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      large?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      xlarge?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
    };
    2?: {
      font?: {};
      small?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      medium?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      large?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      xlarge?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
    };
    3?: {
      font?: {};
      small?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      medium?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      large?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      xlarge?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
    };
    4?: {
      font?: {};
      small?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      medium?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      large?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      xlarge?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
    };
    5?: {
      font?: {};
      small?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      medium?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      large?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      xlarge?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
    };
    6?: {
      font?: {};
      small?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      medium?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      large?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
      xlarge?: {
        size?: string;
        height?: string;
        maxWidth?: string;
      };
    };
  };
  responsiveBreakpoint?: string;
  weight?: number;
}