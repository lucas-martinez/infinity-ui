import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Calendar, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const SimpleCalendar = () => {
  const [date, setDate] = useState<any>();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          onSelect={onSelect}
          size="small"
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          daysOfWeek
          onSelect={onSelect}
          size="small"
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
    </Grommet>
  );
};

storiesOf('Calendar', module).add('Simple', () => <SimpleCalendar />);
