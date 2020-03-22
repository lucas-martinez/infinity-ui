import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Calendar, Grommet } from 'js';
import { grommet } from 'js/themes';

const RangeCalendar = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Calendar range />
    </Box>
  </Grommet>
);

storiesOf('Calendar', module).add('Range', () => <RangeCalendar />);
