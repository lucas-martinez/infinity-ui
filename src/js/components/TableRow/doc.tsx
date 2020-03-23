import { describe } from 'react-desc';

export const doc = TableRow => {
  const DocumentedTableRow = describe(TableRow)
    .description('A row of cells in a table.')
    .usage(
      `import { TableRow } from 'js';
<TableRow />`,
    )
    .intrinsicElement('tr');

  return DocumentedTableRow;
};
