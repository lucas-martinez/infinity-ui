import { css } from 'styled-components';
import { PartialThemeGenerator } from '..';
import { CheckBoxProps } from '../../../js/components/CheckBox';
import { checkBox, checkBoxStyle } from './checkBox';
import { checkBoxLabelStyle } from './checkboxLabel';
import { toggleStyle } from './checkboxSwitch';

const extend = css<CheckBoxProps>`
  ${props => !props.toggle && checkBoxStyle}
  ${props => props.toggle && toggleStyle}
  ${props => props.label && checkBoxLabelStyle}
`;

export type CheckBoxTheme = typeof checkBox;

const generator: PartialThemeGenerator<'checkBox'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    checkBox: {
      // ...checkBox,
      extend,
    },
  };
};

export default generator;
