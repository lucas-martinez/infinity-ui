import { storiesOf } from '@storybook/react';
import { Box, Meter } from 'grommet/components';
import React, { useEffect, useRef, useState } from 'react';


const CircleMeter = () => {
  const [ value, setValue ] = useState(20);

  const timer = useRef();
  clearTimeout(timer.current);
  timer.current = setTimeout(() => {
    setValue(value < 100 ? value + 8 : 20);
  }, 2000);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    }
  }, []);

  return (
    <>
      <Box align="center" pad="large">
        <Meter
          type="circle"
          background="light-2"
          values={[{ value, color: value > 50 ? 'accent-2' : 'accent-1' }]}
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Meter', module).add('Circle', () => <CircleMeter />);
