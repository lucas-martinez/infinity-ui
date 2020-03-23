import { describe } from 'react-desc';

export const doc = TableBody => {
  const DocumentedTableBody = describe(TableBody)
    .description('The body of a table.')
    .usage(
      `import { TableBody } from 'js';
<TableBody />`,
    )
    .intrinsicElement('tbody');

  return DocumentedTableBody;
};
