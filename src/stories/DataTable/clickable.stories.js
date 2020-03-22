import { storiesOf } from '@storybook/react';
import { Box, DataTable } from 'grommet/components';
import React from 'react';

import { columns, DATA } from './data';

const ClickableDataTable = () => (
  <>
    <Box align="center" pad="large">
      {/* eslint-disable no-alert */}
      <DataTable
        columns={columns}
        data={DATA}
        step={10}
        onClickRow={event => alert(JSON.stringify(event.datum, null, 2))}
      />
    </Box>
  </>
);

storiesOf('Grommet 2/DataTable', module).add('Clickable', () => <ClickableDataTable />);
