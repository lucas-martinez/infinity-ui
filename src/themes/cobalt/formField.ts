import { css } from 'styled-components';
import spec from './quantum-spec';
import { PartialThemeGenerator } from '.';
import pick from '../pick';

export const formField = {
  minHeight: spec.global.formField.minHeight,

  hover: {
    borderBottomColor: {
      dark: spec.global.input.borderColorDark,
      light: spec.global.input.borderColor,
    }
  },

  help: {
    float: spec.global.formField.helpFloat,
    marginLeft: spec.global.formField.helpMarginLeft,
    width: spec.global.formField.helpWidth,
  },

  input: {
    borderBottomWidth: spec.global.input.borderWidthBottom,
    paddingRight: spec.global.input.paddingRight,
    paddingLeft: spec.global.input.paddingLeft,
    focus: {
      paddingRight: spec.global.input.paddingRight,
      paddingLeft: spec.global.input.paddingLeft,
      borderBottomWidth: spec.global.input.borderWidthBottom,
    },
  },

  color: {},

  search: {
    paddingTop: spec.global.formField.datetimePaddingTop,
  },

  email: {},

  error: {
    borderColor: {
      dark: spec.global.input.borderColorErrorDark,
      light: spec.global.input.borderColorError
    },

    color: {
      dark: spec.global.color.accent4,
      light: spec.global.color.accent4,
    },
    display: spec.global.formField.errorDisplay,
    textAlign: spec.global.formField.errorTextalign,
    fontSize: spec.global.text.helpBlockFontSize,
    position: spec.global.formField.errorPosition,
    bottom: spec.global.formField.errorBottom,
    left: spec.global.formField.errorLeft,
    marginLeft: spec.global.formField.errorMarginLeft,

    icon: {
      content: '',
      backgroundImage: 'url(${spec.global.iconSeverityCriticalBadge16',
      display: spec.global.formField.errorDisplayBefore,
      height: spec.global.formField.errorIconHeight,
      width: spec.global.formField.errorIconWidth,
      marginRight: spec.global.formField.errorMarginRight,
      verticalAlign: spec.global.formField.errorVerticalAlign,
      backgroundRepeat: spec.global.formField.errorBackgroundRepeat,
    },
  },

  file: {},

  label: {
    width: spec.global.formField.labelWidth,
    float: spec.global.formField.labelFloat,
    marginRight: spec.global.formField.labelMarginRight,
    fontSize: '14px'
  },

  number: {},

  password: {},

  range: {
    marginLeft: spec.global.formField.rangeinputMargingLeft,
    paddingLeft: spec.global.formField.rangeinputPaddingLeft,
    paddingRight: spec.global.formField.rangeinputPaddingRight,
    focus: {
      marginLeft: spec.global.formField.rangeinputMargingLeft,
      paddingLeft: spec.global.formField.rangeinputPaddingLeft,
      paddingRight: spec.global.formField.rangeinputPaddingRight,
    },
  },

  select: {
    width: spec.global.formField.selectInputWidth,
  },

  text: {
    backgroundColor: {
      dark: spec.global.input.backgroundColorDark,
      light: spec.global.input.backgroundColor
    },
    paddingLeft: spec.global.input.paddingLeft,
    paddingRight: spec.global.input.paddingRight,
    focus: {
      paddingLeft: spec.global.input.paddingLeft,
      paddingRight: spec.global.input.paddingRight,
      borderTop: spec.global.formField.textinputBorderTop,
      borderLeft: spec.global.formField.textinputBorderLeft,
      borderRight: spec.global.formField.textinputBorderRight,
    },
  },
};

export type FormFieldTheme = typeof formField;

const formFieldBaseStyle = css`
  border: none;
  min-height: ${formField.minHeight};
  position: relative;
  overflow: hidden;
  padding: 5px 24px;
  :not(span),
  :not(button) {
    flex-direction: row;
  }
  div {
    &:hover {
      border-bottom-color: ${pick(formField.hover.borderBottomColor)};
    }
  }
  > div:first-of-type {
    border-bottom: none;
  }
  > label:first-of-type {
    float: ${formField.label.float};
    font-size: ${formField.label.fontSize};
    margin-right: ${formField.label.marginRight};
    width: ${formField.label.width};
  }

  > :first-child {
    border: none;
  }

  > div:nth-child(2) {
    width: 70%;
  }

  help {
    float: ${formField.help.float};
    margin-left: ${formField.help.marginLeft};
    width: ${formField.help.width};
  }
`;

const formFieldErrorStyle = css`
  label ~ span {
    color: ${pick(formField.error.color)};
    display: ${formField.error.display};
    text-align: ${formField.error.textAlign};
    font-size: ${formField.error.fontSize};
    position: ${formField.error.position};
    bottom: ${formField.error.bottom};
    left: ${formField.error.left};
    margin-left: ${formField.error.marginLeft};

    &:before {
      content: '';
      background-image: ${formField.error.icon.backgroundImage};
      background-repeat: ${formField.error.icon.backgroundRepeat};
      display: ${formField.error.icon.display};
      height: ${formField.error.icon.height};
      margin-right: ${formField.error.icon.marginRight};
      vertical-align: ${formField.error.icon.verticalAlign};
      width: ${formField.error.icon.width};
    }
  }
`;

const formFieldErrorInputStyle = css`
  > div > input[type='text'],
  > div > input[type='email'],
  > div > input[type='password'] {
    border-bottom: ${formField.input.borderBottomWidth} ${spec.global.input.borderStyle} ${pick(formField.error.borderColor)};
  }
`;

const formFieldInputStyle = css`
  label + div {
    overflow: hidden;
    > div input:not(type='range') {
      padding-bottom: 2px;
    }
    > div input[type='text'],
    > div input[type='email'],
    > div input[type='password'],
    > div input[type='number'],
    > div select,
    > div search-input input,
    > div calendar input,
    > div date-time input,
    > div text-input,
    > div select input,
    > div select,
    > div password-input input {
      padding-right: ${formField.input.paddingRight};
      padding-left: ${formField.input.paddingLeft};
      padding-bottom: 2px;
      margin-bottom: ${spec.global.formField.textareaMarginBottom};
      box-sizing: unset;
      &:focus {
        padding-right: ${formField.input.focus.paddingRight};
        padding-left: ${formField.input.focus.paddingLeft};
        border-bottom-width: ${formField.input.borderBottomWidth};
      }
    }
    > div input[type='range'] {
      margin-left: ${formField.range.marginLeft};
      &:focus {
        margin-left: ${formField.range.focus.marginLeft};
      }
    }
    div input[type='number'] {
      padding-right: ${formField.input.paddingRight};
      padding-left: ${formField.input.paddingLeft};
      &:focus {
        padding-right: ${formField.input.paddingRight};
        padding-left: ${formField.input.paddingLeft};
      }
    }
    > div input[type='file'],
    > div input[type='color'] {
      padding-left: ${formField.range.paddingLeft};
      padding-right: ${formField.range.paddingRight};
      &:focus {
        padding-left: ${formField.range.focus.paddingLeft};
        padding-right: ${formField.range.focus.paddingRight};
      }
    }
    > div search-input,
    > div calendar,
    > div date-time {
      search-input,
      calendar,
      date-time {
        top: ${formField.search.paddingTop};
      }
    }
    > div select input {
      width: ${formField.select.width};
    }

    > div .input.text-input.input {
      background: ${pick(formField.text.backgroundColor)};
      padding-left: ${formField.text.paddingLeft};
      padding-right: ${formField.text.paddingRight};
      &:focus {
        padding-left: ${formField.text.paddingLeft};
        padding-right: ${formField.text.paddingRight};
        border-top: ${formField.text.focus.borderTop};
        border-left: ${formField.text.focus.borderLeft};
        border-right: ${formField.text.focus.borderRight};
      }
    }
  }
`;

const extend = css<{ error: string }>`
  ${formFieldBaseStyle}
  ${props => props.error && formFieldErrorInputStyle}
  ${formFieldInputStyle}
  ${formFieldErrorStyle}
`;

const generator: PartialThemeGenerator<'formField'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    formField: {
      ...formField,
      extend,
    },
  };
};

export default generator;
