import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Calendar, Grommet, grommet } from '../../../../js';
import { deepMerge } from '../../../../js/utils';

const customHeading = deepMerge(grommet, {
  calendar: {
    heading: {
      level: '3',
    },
  },
});

const CustomSizeCalendar = () => {
  const [date, setDate] = useState<any>();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <Grommet theme={customHeading}>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          onSelect={onSelect}
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
    </Grommet>
  );
};

storiesOf('Calendar', module).add('Heading Size', () => <CustomSizeCalendar />);
