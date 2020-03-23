import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import spec from './quantum-spec';

export const maskedInput = {
  
};

export type MaskedTheme = typeof maskedInput;

const generator: PartialThemeGenerator<'maskedInput'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    maskedInput: {
      extend: css`
        border-radius: 0px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: ${spec.global.input.borderWidthBottom} ${spec.global.input.border};
        padding-left: 0px;
        padding-right: 0px;
        font-size: ${spec.global.input.fontSize};
        font-style: normal;
        font-weight: 100;
      `,
    },
  };
};

export default generator;
