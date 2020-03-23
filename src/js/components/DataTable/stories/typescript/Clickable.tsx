import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, DataTable, Grommet } from '../../../../../js';
import { grommet } from '../../../../../js/themes';
import { columns, DATA } from '../data';

const ClickableDataTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      {/* eslint-disable no-alert */}
      <DataTable
        columns={columns as any[]}
        data={DATA}
        step={10}
        onClickRow={event => console.log(event.datum)}
      />
    </Box>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('TypeScript/DataTable', module).add('Clickable', () => (
    <ClickableDataTable />
  ));
}
