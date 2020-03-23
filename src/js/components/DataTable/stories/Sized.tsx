import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, DataTable, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';
// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, data } from './data';

const SizedDataTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={data} size="medium" />
    </Box>
  </Grommet>
);

storiesOf('DataTable', module).add('Sized', () => <SizedDataTable />);