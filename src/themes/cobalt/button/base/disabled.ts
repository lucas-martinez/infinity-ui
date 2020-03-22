import { css } from 'styled-components';
import { ButtonProps } from '../../../../js/components/Button';
import { backgroundColor, borderColor } from '../../../css';
import pick from '../../../pick';
import { BaseButtonStyling } from './styling';

interface StyledButtonProps extends Omit<ButtonProps, 'color'> {
  colorValue?: string;
}

const disabled = ({ style: { disabled } }: BaseButtonStyling, props: StyledButtonProps) => css`
  color: ${pick(disabled.color)};
  ${props.colorValue || props.plain ? '' : backgroundColor(disabled)}
  ${props.colorValue || props.plain || !disabled.borderColor ? '' : borderColor(disabled)}
  box-shadow: ${pick(disabled.boxShadow)};
`;

export default disabled;
