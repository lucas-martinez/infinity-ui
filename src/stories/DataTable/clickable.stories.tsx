import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, DataTable } from '../../js/components';
import { columns, DATA } from './data';

const ClickableDataTable = () => (
  <>
    <Box align="center" pad="large">
      {/* eslint-disable no-alert */}
      <DataTable
        columns={columns}
        data={DATA}
        step={10}
        onClickRow={event => console.log(event.datum)}
      />
    </Box>
  </>
);

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/DataTable', module).add('Clickable', () => (
    <ClickableDataTable />
  ));
}
