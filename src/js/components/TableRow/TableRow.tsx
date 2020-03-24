import React from 'react';
import { TableRowIntrinsicProps } from '../intrinsic-elements';
import { StyledTableRow } from '../Table/StyledTable';

export interface TableRowProps extends TableRowIntrinsicProps {}

const TableRow = (props: TableRowProps) => <StyledTableRow {...props} />;

let TableRowDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  TableRowDoc = require('./doc').doc(TableRow);
}
const TableRowWrapper = TableRowDoc || TableRow;

export { TableRowWrapper as TableRow };
