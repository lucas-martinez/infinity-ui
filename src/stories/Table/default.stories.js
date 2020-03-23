import { storiesOf } from '@storybook/react';
import { Box, Table, TableBody, TableCell, TableFooter, TableHeader, TableRow, Text } from 'grommet/components';
import React from 'react';

import { columns, data } from './data';

const DefaultTable = () => (
  <>
    <Box align="center" pad="large">
      <Table caption="Default Table">
        <TableHeader>
          <TableRow>
            {columns.map(c => (
              <TableCell key={c.property} scope="col" align={c.align}>
                <Text>{c.label}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(datum => (
            <TableRow key={datum.id}>
              {columns.map(c => (
                <TableCell key={c.property} scope={c.dataScope} align={c.align}>
                  <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {columns.map(c => (
              <TableCell key={c.property} align={c.align}>
                <Text>{c.footer}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </Box>
  </>
);

storiesOf('Grommet 2/Table', module).add('Default', () => <DefaultTable />);
