import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, Meter } from '../../../../js';
import { grommet } from '../../../../js/themes';

const BarMeter = () => {
  const value = 30;

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Meter type="bar" background="light-2" values={[{ value }]} />
      </Box>
    </Grommet>
  );
};

storiesOf('Meter', module).add('Bar', () => <BarMeter />);
