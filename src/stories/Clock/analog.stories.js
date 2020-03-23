import { storiesOf } from '@storybook/react';
import { Box, Clock } from 'grommet/components';
import React from 'react';


const AnalogClock = () => (
  <>
    <Box align="center" justify="start" pad="large">
      <Clock type="analog" />
    </Box>
  </>
);

storiesOf('Grommet 2/Clock', module).add('Analog', () => <AnalogClock />, {
  chromatic: { disable: true },
});
