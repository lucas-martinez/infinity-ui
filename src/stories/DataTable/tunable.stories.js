import { storiesOf } from '@storybook/react';
import { Box, DataTable } from 'grommet/components';
import React from 'react';

import { columns, DATA } from './data';

const TunableDataTable = () => (
  <>
    <Box align="center" pad="large">
      <DataTable
        columns={columns.map(c => ({
          ...c,
          search: c.property === 'name' || c.property === 'location',
        }))}
        data={DATA}
        sortable
        resizeable
      />
    </Box>
  </>
);

storiesOf('Grommet 2/DataTable', module).add('Tunable', () => <TunableDataTable />);
