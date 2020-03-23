import { storiesOf } from '@storybook/react';
import { Box, DataTable } from 'grommet/components';
import React from 'react';

import { columns, DATA } from './data';

const groupColumns = [...columns];
const first = groupColumns[0];
groupColumns[0] = { ...groupColumns[1] };
groupColumns[1] = { ...first };
groupColumns[0].footer = groupColumns[1].footer;
delete groupColumns[1].footer;

const GroupedDataTable = () => (
  <>
    <Box align="center" pad="large">
      <DataTable
        columns={groupColumns}
        data={DATA}
        groupBy="location"
        sortable
      />
    </Box>
  </>
);

storiesOf('Grommet 2/DataTable', module).add('Grouped', () => <GroupedDataTable />);
