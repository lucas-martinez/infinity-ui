import { storiesOf } from '@storybook/react';
import { Box, DataTable, Grommet } from '../../../../../js';
import { grommet } from '../../../../../js/themes';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { columns, DATA } from '../data';

const StyledDataTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <DataTable
        columns={columns}
        data={DATA}
        step={10}
        pad={{ horizontal: 'large', vertical: 'medium' }}
        background={{
          header: 'dark-3',
          body: ['light-1', 'light-3'],
          footer: 'dark-3',
        }}
        border={{ body: 'bottom' }}
        rowProps={{ Eric: { background: 'accent-2', pad: 'large' } }}
      />
    </Box>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('TypeScript/DataTable', module).add('Style', () => <StyledDataTable />);
}
