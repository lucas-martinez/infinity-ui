import { css } from 'styled-components';
import { CheckBoxProps } from '../../../js/components/CheckBox';
import themed from '../../pick';
import spec from '../quantum-spec';
import { checkboxTick } from './checkboxTick';

export const checkBox = {
  borderColor: {
    dark: spec.global.checkbox.borderColorDark,
    light: spec.global.checkbox.borderColor,
  },
  borderRadius: spec.global.checkbox.borderRadius,
  backgroundColor: {
    dark: spec.global.checkbox.backgroundColorDark,
    light: spec.global.checkbox.backgroundColor,
  },
  size: spec.global.checkbox.size,
  transition: spec.global.checkbox.transition,

  focus: {
    borderColor: {
      dark: spec.global.checkbox.borderColorFocusDark,
      light: spec.global.checkbox.borderColorFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.checkbox.backgroundColorHoverDark,
      light: spec.global.checkbox.backgroundColorHover,
    },
    borderColor: {
      dark: spec.global.checkbox.borderColorHoverDark,
      light: spec.global.checkbox.borderColorHover,
    },
  },

  checked: {
    backgroundColor: {
      dark: spec.global.checkbox.backgroundColorCheckedDark,
      light: spec.global.checkbox.backgroundColorChecked,
    },
    borderColor: {
      dark: spec.global.checkbox.borderColorCheckedDark,
      light: spec.global.checkbox.borderColorChecked,
    },
    hover: {
      backgroundColor: {
        dark: spec.global.checkbox.backgroundColorHoverCheckedDark,
        light: spec.global.checkbox.backgroundColorHoverChecked,
      },
    },
  },

  label: {
    color: {
      dark: spec.global.checkboxLabel.colorDark,
      light: spec.global.checkboxLabel.color,
    },
    disabled: {
      color: {
        dark: spec.global.checkboxLabel.colorDisabledDark,
        light: spec.global.checkboxLabel.colorDisabled,
      },
    },
  },
};

export const checkBoxUncheckedStyle = css`
  div {
    width: ${checkBox.size};
    height: ${checkBox.size};
    border: 1px solid ${themed(checkBox.borderColor)};
    border-radius: ${checkBox.borderRadius};
    transition: ${checkBox.transition};
    -webkit-transition: ${checkBox.transition};
    &:hover {
      background-color: ${themed(checkBox.hover.backgroundColor)};
      border-color: ${themed(checkBox.hover.borderColor)};
    }
  }
`;

export const checkBoxIntermediateStyle = css`
  input[type='checkbox'] + div:after {
    opacity: 1;
    box-sizing: content-box;
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: 0;
    background-color: #0073e7;
    border: 0;
    -webkit-transform: none;
    -moz-transform: none;
    -o-transform: none;
    -ms-transform: none;
    transform: none;
    transition: none;
  }
`;

export const checkBoxCheckedStyle = css`
  div {
    border: 0px;
    width: ${checkBox.size};
    height: ${checkBox.size};
  }
  div > svg {
    width: ${checkBox.size};
    height: ${checkBox.size};
    border-color: ${themed(checkBox.checked.borderColor)};
    background-color: ${themed(checkBox.checked.backgroundColor)};
    stroke: ${themed(checkboxTick.color)};
    &:focus {
      animation: ${checkboxTick.animationChecked};
      border-color: ${themed(checkBox.focus.borderColor)};
      box-shadow: ${spec.global.common.boxShadowFocus};
    }
    &:hover {
      border: 1px solid ${themed(checkBox.hover.borderColor)};
      background-color: ${themed(checkBox.checked.hover.backgroundColor)};
    }
  }
`;

export const checkBoxStyle = css<CheckBoxProps>`
  ${props => !props.checked && !props.disabled && checkBoxUncheckedStyle}
  ${props => props.indeterminate && checkBoxIntermediateStyle}
  ${props => props.checked && !props.disabled && checkBoxCheckedStyle}
`;