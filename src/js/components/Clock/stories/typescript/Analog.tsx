import React from 'react';
import { storiesOf } from '@storybook/react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Grommet, Clock } from '../../../../../js';
import { grommet } from '../../../../../js/themes';

const AnalogClock = () => (
  <Grommet theme={grommet}>
    <Box align="center" justify="start" pad="large">
      <Clock type="analog" />
    </Box>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('TypeScript/Clock', module).add('Analog', () => <AnalogClock />);
}
