import { storiesOf } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Drop, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { deepMerge } from '../../../utils/object';

const customTheme = deepMerge(grommet, {
  global: {
    drop: {
      background: { dark: 'neutral-2', light: 'neutral-2' },
      border: { radius: '10px' },
      zIndex: '13',
    },
  },
});

const Custom = () => {
  const [, setShowDrop] = useState<any>(false);
  const targetRef = useRef<any>();

  useEffect(() => setShowDrop(true), []);
  return (
    <Grommet theme={customTheme} full>
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Box
        </Box>
        {targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'right' }}
            target={targetRef.current}
          >
            <Box pad="small">This Drop uses a custom theme</Box>
          </Drop>
        )}
      </Box>
    </Grommet>
  );
};

storiesOf('Drop', module).add('Custom', () => <Custom />);
