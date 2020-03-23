import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Grid } from '../../js/components';

const NColumnGrid = () => (
  <>
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
  </>
);

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Grid', module).add('N-column layout', () => (
    <NColumnGrid />
  ));
}
