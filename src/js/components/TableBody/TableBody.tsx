import React from 'react';
import { compose } from 'recompose';
import { withForwardRef } from '../hocs';
import { TableHeaderIntrinsicProps } from '../intrinsic-elements';
import { StyledTableBody } from '../Table/StyledTable';
import { TableContext } from '../Table/TableContext';

export interface TableBodyProps extends TableHeaderIntrinsicProps {
  forwardRef: any;
}

const TableBody = ({ forwardRef, ...rest }: TableBodyProps) => (
  <TableContext.Provider value="body">
    <StyledTableBody ref={forwardRef} {...rest} />
  </TableContext.Provider>
);

let TableBodyDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  TableBodyDoc = require('./doc').doc(TableBody);
}
const TableBodyWrapper = compose(withForwardRef)(TableBodyDoc || TableBody);

export { TableBodyWrapper as TableBody };
