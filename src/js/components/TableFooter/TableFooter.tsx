import React from 'react';

import { TableContext } from '../Table/TableContext';
import { StyledTableFooter } from '../Table/StyledTable';
import { TableHeaderIntrinsicProps } from '../intrinsic-elements';

export interface TableFooterProps extends TableHeaderIntrinsicProps {}

const TableFooter = (props: TableFooterProps) => (
  <TableContext.Provider value="footer">
    <StyledTableFooter {...props} />
  </TableContext.Provider>
);

let TableFooterDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  TableFooterDoc = require('./doc').doc(TableFooter);
}
const TableFooterWrapper = TableFooterDoc || TableFooter;

export { TableFooterWrapper as TableFooter };
