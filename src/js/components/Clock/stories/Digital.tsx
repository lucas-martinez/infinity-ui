import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Clock, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const DigitalClock = () => (
  <Grommet theme={grommet}>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" />
    </Box>
  </Grommet>
);

storiesOf('Clock', module).add('Digital', () => <DigitalClock />, {
  chromatic: { disable: true },
});
