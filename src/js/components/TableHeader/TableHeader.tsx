import React from 'react';
import { TableHeaderIntrinsicProps } from '../intrinsic-elements';
import { StyledTableHeader } from '../Table/StyledTable';
import { TableContext } from '../Table/TableContext';

export interface TableHeaderProps extends TableHeaderIntrinsicProps {}

const TableHeader = (props: TableHeaderProps) => (
  <TableContext.Provider value="header">
    <StyledTableHeader {...props} />
  </TableContext.Provider>
);

let TableHeaderDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  TableHeaderDoc = require('./doc').doc(TableHeader);
}
const TableHeaderWrapper = TableHeaderDoc || TableHeader;

export { TableHeaderWrapper as TableHeader };
