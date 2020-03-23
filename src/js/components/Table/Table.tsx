import React from 'react';
import {
  A11yTitleType,
  AlignSelfType,
  GridAreaType,
  MarginType,
} from '../../utils';
import { TableIntrinsicProps } from '../intrinsic-elements';
import { StyledTable, StyledTableDataCaption } from './StyledTable';

export interface TableProps extends TableIntrinsicProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  caption?: string;
  gridArea?: GridAreaType;
  margin?: MarginType;
}

const Table = ({ caption, children, ...rest }: TableProps) => (
  <StyledTable {...rest}>
    {caption ? (
      <StyledTableDataCaption>{caption}</StyledTableDataCaption>
    ) : null}
    {children}
  </StyledTable>
);

let TableDoc;
if (process.env.NODE_ENV !== 'production') {
  TableDoc = require('./doc').doc(Table); // eslint-disable-line global-require
}
const TableWrapper = TableDoc || Table;

export { TableWrapper as Table };
