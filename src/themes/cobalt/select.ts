import { css } from 'styled-components';
import pick from '../pick';
import { PartialThemeGenerator } from '.';
import spec from './quantum-spec';

export const select = {
  drop: {
    backgroundColor: {
      dark: spec.global.dropdownListItem.backgroundColorDark,
      light: spec.global.dropdownListItem.backgroundColor,
    },
    color: {
      dark: spec.global.dropdownListItem.fontColorHoverDark,
      light: spec.global.dropdownListItem.fontColorHover,
    },

    hover: {
      backgroundColor: {
        dark: spec.global.dropdownListItem.backgroundColorHoverDark,
        light: spec.global.dropdownListItem.backgroundColorHover,
      },
      color: {
        dark: spec.global.dropdownListItem.fontColorHoverDark,
        light: spec.global.dropdownListItem.fontColorHover,
      },
    },
  },

  button: {
    backgroundColor: {
      dark: 'black',
      light: 'white',
    },
    borderRadius: 0,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.375,
    padding: '6px 24px',
    textTransform: 'none',

    hover: {
      backgroundColor: {
        dark: spec.global.dropdownListItem.backgroundColorHoverDark,
        light: spec.global.dropdownListItem.backgroundColorHover,
      },
      color: {
        dark: spec.global.dropdownListItem.fontColorHoverDark,
        light: spec.global.dropdownListItem.fontColorHover,
      },
    },
    primary: {
      backgroundColor: {
        dark: spec.global.dropdownListItem.backgroundColorHoverDark,
        light: spec.global.dropdownListItem.backgroundColorHover,
      },
      color: {
        dark: spec.global.dropdownListItem.fontColorHoverDark,
        light: spec.global.dropdownListItem.fontColorHover,
      },
    },
    value: {
      backgroundColor: {
        dark: spec.global.dropdownListItem.backgroundColorHoverDark,
        light: spec.global.dropdownListItem.backgroundColorHover,
      },
      color: {
        dark: spec.global.dropdownListItem.fontColorHoverDark,
        light: spec.global.dropdownListItem.fontColorHover,
      },
    },
  },
};

export type SelectTheme = typeof select;

const buttonStyle = css`
  background-color: ${select.button.backgroundColor};
  text-transform: ${select.button.textTransform};
  > div {
    padding: 0;
  }
  input {
    border-radius: ${select.button.borderRadius};
  }
  div > span {
    font-size: ${select.button.fontSize};
    font-weight: ${select.button.fontWeight};
    line-height: ${select.button.lineHeight};
    padding: ${select.button.padding};
  }
`;

const buttonHoverStyle = css`
  &:hover,
  &:active {
    background-color: ${pick(select.button.primary.backgroundColor)};
    color: ${pick(select.button.primary.color)};
  }
`;

const buttonPrimaryStyle = css`
  background-color: ${pick(select.button.primary.backgroundColor)};
  color: ${pick(select.button.primary.color)};
`;

const buttonValueStyle = css`
  > div {
    &:hover,
    &:active {
      background-color: ${pick(select.button.value.backgroundColor)};
      color: ${pick(select.button.value.color)};
    }
  }
`;

const dropStyle = css`
  &:hover,
  &:active {
    background-color: ${pick(select.drop.hover.backgroundColor)};
    color: ${pick(select.drop.hover.color)};
  }
`;

const extendContainer = css<any>`
  ${props => props.drop && dropStyle}
  button {
    ${buttonStyle}
    ${props => props.primary && buttonPrimaryStyle}
    ${buttonHoverStyle}
    ${props => props.value && buttonValueStyle}
  }
`;

const generator: PartialThemeGenerator<'select'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    select: {
      searchplaceholder: 'search',
      container: {
        extend: extendContainer,
      },
    },
  };
};

export default generator;
