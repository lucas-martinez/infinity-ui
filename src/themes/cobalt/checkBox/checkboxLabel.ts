import { css } from 'styled-components';
import themed from '../../pick';
import spec from '../quantum-spec';

export const checkBoxLabel = {
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
};


export const checkBoxLabelStyle = css`
  span {
    color: ${themed(checkBoxLabel.color)};
  }
`;