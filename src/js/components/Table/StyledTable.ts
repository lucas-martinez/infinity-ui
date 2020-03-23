import styled, { css } from 'styled-components';

import {
  backgroundStyle,
  borderStyle,
  edgeStyle,
  genericStyles,
} from '../../utils';
import { defaultProps } from '../../default-props';

const SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%',
};

const sizeStyle = css`
  width: ${props =>
    SIZE_MAP[props.size] || props.theme.global.size[props.size]};
  max-width: ${props =>
    SIZE_MAP[props.size] || props.theme.global.size[props.size]};
  overflow: hidden;
`;

const StyledTableCell = styled.td<any>`
  margin: 0;
  padding: 0;
  font-weight: inherit;
  text-align: inherit;
  height: 100%;

  ${props => props.size && sizeStyle}
  ${props => props.verticalAlign && `vertical-align: ${props.verticalAlign};`}
  ${props => props.align && `text-align: ${props.align};`}
  ${props => props.background && backgroundStyle(props.background, props.theme)}
  ${props =>
    props.border && borderStyle(props.border, props.responsive, props.theme)}
  ${props =>
    props.pad &&
    edgeStyle(
      'padding',
      props.pad,
      props.responsive,
      props.theme.box.responsiveBreakpoint,
      props.theme,
    )}
  ${props => props.tableContextTheme && props.tableContextTheme.extend}
`;

StyledTableCell.defaultProps = {};
Object.setPrototypeOf(StyledTableCell.defaultProps, defaultProps);

const StyledTableDataCaption = styled.caption<any>`
  margin-bottom: ${props => props.theme.global.edgeSize.xxsmall};
`;

StyledTableDataCaption.defaultProps = {};
Object.setPrototypeOf(StyledTableDataCaption.defaultProps, defaultProps);

const StyledTableRow = styled.tr<any>`
  height: 100%;
`;

StyledTableRow.defaultProps = {};
Object.setPrototypeOf(StyledTableRow.defaultProps, defaultProps);

const StyledTableBody = styled.tbody<any>``;

StyledTableBody.defaultProps = {};
Object.setPrototypeOf(StyledTableBody.defaultProps, defaultProps);

const StyledTableHeader = styled.thead<any>``;

StyledTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledTableHeader.defaultProps, defaultProps);

const StyledTableFooter = styled.tfoot<any>``;

StyledTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledTableFooter.defaultProps, defaultProps);

const StyledTable = styled.table<any>`
  border-spacing: 0;
  border-collapse: collapse;
  width: inherit;
  @media all and (min--moz-device-pixel-ratio: 0) {
    table-layout: fixed;
  }
  ${genericStyles} ${props => props.theme.table && props.theme.table.extend};
`;

StyledTable.defaultProps = {};
Object.setPrototypeOf(StyledTable.defaultProps, defaultProps);

export {
  StyledTableCell,
  StyledTableDataCaption,
  StyledTableRow,
  StyledTableBody,
  StyledTableHeader,
  StyledTableFooter,
  StyledTable,
};
