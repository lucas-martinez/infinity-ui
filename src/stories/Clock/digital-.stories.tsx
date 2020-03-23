import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Clock } from '../../js/components';

const DigitalClock = () => (
  <>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" />
    </Box>
  </>
);

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Clock', module).add('Digital', () => <DigitalClock />);
}
