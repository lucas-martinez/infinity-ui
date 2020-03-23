import { storiesOf } from '@storybook/react';
import { Box, Clock } from 'grommet/components';
import React from 'react';


const DigitalClock = () => (
  <>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" />
    </Box>
  </>
);

storiesOf('Grommet 2/Clock', module).add('Digital', () => <DigitalClock />, {
  chromatic: { disable: true },
});
