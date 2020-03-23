import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Clock, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const AnalogClock = () => (
  <Grommet theme={grommet}>
    <Box align="center" justify="start" pad="large">
      <Clock type="analog" />
    </Box>
  </Grommet>
);

storiesOf('Clock', module).add('Analog', () => <AnalogClock />, {
  chromatic: { disable: true },
});
