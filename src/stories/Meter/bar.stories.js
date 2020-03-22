import { storiesOf } from '@storybook/react';
import { Box, Meter } from 'grommet/components';
import React from 'react';


const BarMeter = () => {
  const value = 30;

  return (
    <>
      <Box align="center" pad="large">
        <Meter type="bar" background="light-2" values={[{ value }]} />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Meter', module).add('Bar', () => <BarMeter />);
