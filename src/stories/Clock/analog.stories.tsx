import { storiesOf } from '@storybook/react';
import { Box, Clock } from '../../js/components';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';

const AnalogClock = () => (
  <>
    <Box align="center" justify="start" pad="large">
      <Clock type="analog" />
    </Box>
  </>
);

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Clock', module).add('Analog', () => <AnalogClock />);
}
