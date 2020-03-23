import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Grid, Grommet } from '../../../../../js';
import { grommet } from '../../../../../js/themes';

const NColumnGrid = () => (
  <Grommet theme={grommet} full>
    <Grid
      columns={{
        count: 6,
        size: 'auto',
      }}
      gap="small"
    >
      <Box background="brand">Item 1</Box>
      <Box background="brand">Item 2</Box>
      <Box background="brand">Item 3</Box>
      <Box background="brand">Item 4</Box>
      <Box background="brand">Item 5</Box>
      <Box background="brand">Item 6</Box>
    </Grid>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('TypeScript/Grid', module).add('N-column layout', () => (
    <NColumnGrid />
  ));
}
