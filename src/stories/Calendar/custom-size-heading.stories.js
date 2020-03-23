import { storiesOf } from '@storybook/react';
import { Box, Calendar, Grommet, grommet } from 'js/components';
import { deepMerge } from 'js/utils';
import React, { useState } from 'react';


const customHeading = deepMerge(grommet, {
  calendar: {
    heading: {
      level: '3',
    },
  },
});

const CustomSizeCalendar = () => {
  const [date, setDate] = useState();

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

storiesOf('Grommet 2/Calendar', module).add('Heading Size', () => <CustomSizeCalendar />);
