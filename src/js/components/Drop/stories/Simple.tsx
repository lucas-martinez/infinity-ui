import { storiesOf } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Drop, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const SimpleDrop = () => {
  const targetRef = useRef<any>();

  const [, setShowDrop] = useState<any>(false);
  useEffect(() => {
    setShowDrop(true);
  }, []);

  return (
    <Grommet theme={grommet} full>
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Target
        </Box>
        {targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'left' }}
            target={targetRef.current}
          >
            <Box pad="large">Drop Contents</Box>
          </Drop>
        )}
      </Box>
    </Grommet>
  );
};

storiesOf('Drop', module).add('Simple', () => <SimpleDrop />);
