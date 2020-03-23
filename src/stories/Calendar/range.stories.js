import { storiesOf } from '@storybook/react';
import { Box, Calendar } from 'grommet/components';
import React from 'react';


const RangeCalendar = () => (
  <>
    <Box align="center" pad="large">
      <Calendar range />
    </Box>
  </>
);

storiesOf('Grommet 2/Calendar', module).add('Range', () => <RangeCalendar />);
