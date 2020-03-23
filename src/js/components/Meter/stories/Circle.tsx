import { storiesOf } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Grommet, Meter } from '../../../../js';
import { grommet } from '../../../../js/themes';

const CircleMeter = () => {
  const [value, setValue] = useState(20);

  const timer = useRef();
  clearTimeout(timer.current);
  timer.current = setTimeout(() => {
    setValue(value < 100 ? value + 8 : 20);
  }, 2000);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Meter
          type="circle"
          background="light-2"
          values={[{ value, color: value > 50 ? 'accent-2' : 'accent-1' }]}
        />
      </Box>
    </Grommet>
  );
};

storiesOf('Meter', module).add('Circle', () => <CircleMeter />);
