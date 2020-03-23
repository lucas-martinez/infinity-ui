import { storiesOf } from '@storybook/react';
import { Box, DataTable } from 'grommet/components';
import React from 'react';

import { columns, data } from './data';

const SizedDataTable = () => (
  <>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={data} size="medium" />
    </Box>
  </>
);

storiesOf('Grommet 2/DataTable', module).add('Sized', () => <SizedDataTable />);
