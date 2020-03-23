import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, DataTable } from '../../js/components';
import { columns, DATA } from './data';

const StyledDataTable = () => (
  <>
    <Box align="center" pad="large">
      <DataTable
        columns={columns as any[]}
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
  </>
);

if (!isChromatic()) {
  storiesOf('Grommet 2/DataTable', module).add('Styled', () => <StyledDataTable />);
}
