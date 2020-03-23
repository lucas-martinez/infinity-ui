import { css } from 'styled-components';
import { CheckBoxProps } from '../../../js/components/CheckBox';
import themed from '../../pick';
import spec from '../quantum-spec';
import { checkboxSwitchCircle } from './checkboxSwitchCircle';

export const checkBoxSwitch = {
  backgroundColor: {
    dark: spec.global.checkboxSwitch.backgroundColorDark,
    light: spec.global.checkboxSwitch.backgroundColor,
  },
  borderRadius: spec.global.checkboxSwitch.borderRadius,
  height: spec.global.checkboxSwitch.height,
  width: spec.global.checkboxSwitch.width,

  disabled: {
    backgroundColor: {
      dark: spec.global.checkboxSwitch.backgroundColorDisabledDark,
      light: spec.global.checkboxSwitch.backgroundColorDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.checkboxSwitch.backgroundColorFocusDark,
      light: spec.global.checkboxSwitch.backgroundColorFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.checkboxSwitch.backgroundColorHoverDark,
      light: spec.global.checkboxSwitch.backgroundColorHover,
    },
    borderColor: {
      dark: spec.global.checkbox.borderColorHoverDark,
      light: spec.global.checkbox.borderColorHover,
    },
    border: spec.global.checkboxSwitch.borderHover,
  },

  checked: {
    disabled: {
      backgroundColor: {
        dark: spec.global.checkboxSwitch.backgroundColorDisabledCheckedDark,
        light: spec.global.checkboxSwitch.backgroundColorDisabledChecked,
      },
    },
    focus: {
      backgroundColor: {
        dark: spec.global.checkboxSwitch.backgroundColorFocusCheckedDark,
        light: spec.global.checkboxSwitch.backgroundColorFocusChecked,
      },
    },
    hover: {
      backgroundColor: {
        dark: spec.global.checkboxSwitch.backgroundColorHoverCheckedDark,
        light: spec.global.checkboxSwitch.backgroundColorHoverChecked,
      },
    },
  }
};

export const toggleBaseStyle = css`
  div {
    animation: none;
    background-color: ${themed(checkBoxSwitch.backgroundColor)};
    border-radius: ${checkBoxSwitch.borderRadius};
    height: ${checkBoxSwitch.height};
    width: ${checkBoxSwitch.width};
    -webkit-animation: none;
  }
  div > span {
    border: 0px;
  }
  div > span > span {
    width: ${checkboxSwitchCircle.size};
    height: ${checkboxSwitchCircle.size};
    top: 0px;
    left: calc(${checkboxSwitchCircle.width} / 2);
    &:after {
      height: ${checkboxSwitchCircle.size};
      width: ${checkboxSwitchCircle.size};
      top: 0px;
      left: -${checkboxSwitchCircle.width} / 2;
      border: ${checkboxSwitchCircle.border};
      transform: none;
      -ms-transform: none;
      -webkit-transform: none;
      transition: ${checkboxSwitchCircle.transition};
      -webkit-transition: ${checkboxSwitchCircle.transition};
      animation: none;
      -webkit-animation: none;
    }
  }
  div {
    &:focus + >span {
      box-shadow: none;
      background-color: ${themed(checkBoxSwitch.focus.backgroundColor)};
      &:after {
        box-shadow: ${themed(checkboxSwitchCircle.focus.boxShadow)};
        border-color: ${themed(checkboxSwitchCircle.focus.borderColor)};
        background-color: ${themed(checkboxSwitchCircle.focus.backgroundColor)};
        animation: ${checkboxSwitchCircle.animationChecked};
      }
    }
  }
`;

export const toggleCheckedStyle = css`
  div {
    div > span {
      background-color: ${themed(checkBoxSwitch.checked.focus.backgroundColor)};
    }
    div > span&:focus {
      &:after {
        box-shadow: ${themed(checkboxSwitchCircle.checked.focus.boxShadow)};
        border-color: ${themed(checkboxSwitchCircle.checked.focus.borderColor)};
        background-color: ${themed(checkboxSwitchCircle.checked.focus.backgroundColor)};
        animation: ${checkboxSwitchCircle.animationChecked};
      }
    }
  }
`;

export const toggleEnabledStyle = css`
  :hover {
    div > span {
      border-color: ${themed(checkBoxSwitch.hover.borderColor)};
      background-color: ${themed(checkBoxSwitch.backgroundColor)};
    }
    &:after {
      width: calc(${checkboxSwitchCircle.size} + ${checkboxSwitchCircle.hover.growth});
      border-color: ${themed(checkboxSwitchCircle.hover.borderColor)};
      left: -calc(${checkboxSwitchCircle.height} + ${checkboxSwitchCircle.borderWidth});
      background-color: ${themed(checkboxSwitchCircle.checked.hover.backgroundColor)};
      border-color: ${themed(checkboxSwitchCircle.hover.borderColor)};
    }
  }
`;

export const toggleDisabledStyle = css`
  :hover {
    border-color: ${themed(checkBoxSwitch.hover.borderColor)};
    background-color: ${themed(checkBoxSwitch.backgroundColor)};
  }
`;

export const toggleStyle = css<CheckBoxProps>`
  ${toggleBaseStyle}
  ${props => props.checked && !props.disabled && toggleCheckedStyle}
  ${props => !props.disabled && toggleDisabledStyle}
`;
