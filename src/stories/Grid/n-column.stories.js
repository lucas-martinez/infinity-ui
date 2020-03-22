import { storiesOf } from '@storybook/react';
import { Box, Grid } from 'grommet/components';
import React from 'react';


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

storiesOf('Grommet 2/Grid', module).add('N-column layout', () => <NColumnGrid />);
