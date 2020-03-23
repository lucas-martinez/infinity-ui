import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, DataTable, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';
// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const ClickableDataTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      {/* eslint-disable no-alert */}
      <DataTable
        columns={columns}
        data={DATA}
        step={10}
        onClickRow={event => alert(JSON.stringify(event.datum, null, 2))}
      />
    </Box>
  </Grommet>
);

storiesOf('DataTable', module).add('Clickable', () => <ClickableDataTable />);
