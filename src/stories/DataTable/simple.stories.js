import { storiesOf } from '@storybook/react';
import { Box, DataTable } from 'grommet/components';
import React from 'react';

import { columns, DATA } from './data';

const SimpleDataTable = () => (
  <>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={DATA} step={10} />
    </Box>
  </>
);

storiesOf('Grommet 2/DataTable', module).add('Simple', () => <SimpleDataTable />);
