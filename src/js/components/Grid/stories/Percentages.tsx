import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grid, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const Percentages = () => (
  <Grommet theme={grommet} full>
    <Grid
      fill
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      columns={['small', 'flex']}
      rows={['flex']}
      gap="small"
    >
      <Box gridArea="nav" background="brand" />
      <Box gridArea="main" background="brand" />
    </Grid>
  </Grommet>
);

storiesOf('Grid', module).add('Percentages', () => <Percentages />);
