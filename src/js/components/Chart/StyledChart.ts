import styled from 'styled-components';
import { defaultProps } from '../../default-props';
import { genericStyles } from '../../utils';

const StyledChart = styled.svg<any>`
  display: block;
  max-width: 100%;
  overflow: visible;

  ${genericStyles} ${props => props.theme.chart && props.theme.chart.extend};
`;

StyledChart.defaultProps = {};
Object.setPrototypeOf(StyledChart.defaultProps, defaultProps);

export { StyledChart };
