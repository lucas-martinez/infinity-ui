import { storiesOf } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Drop, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { deepMerge } from '../../../utils/object';

const lazyTheme = deepMerge(grommet, {
  global: {
    drop: {
      background: 'rgba(255, 255, 255, 0.7)',
    },
  },
});

const finalLazyPad = 'xlarge';

const LazyDrop = () => {
  const [pad, setPad] = useState<any>(null);

  const topLeftTargetRef = useRef<any>();
  const topRightTargetRef = useRef<any>();
  const bottomLeftTargetRef = useRef<any>();
  const bottomRightTargetRef = useRef<any>();

  useEffect(() => {
    setPad('small');
    setTimeout(() => {
      setPad(finalLazyPad);
    }, 2000);
  }, []);

  return (
    <Grommet theme={lazyTheme} full>
      <Box fill justify="between" pad="large" gap="small">
        <Box direction="row" justify="between" pad={{ horizontal: 'small' }}>
          <Box
            background="dark-3"
            pad="medium"
            align="center"
            ref={topLeftTargetRef}
          >
            Target
          </Box>
          {topLeftTargetRef.current && (
            <Drop
              align={{ top: 'bottom', left: 'left' }}
              target={topLeftTargetRef.current}
              responsive
            >
              <Box
                height={pad === 'small' ? 'xsmall' : undefined}
                pad={{ horizontal: 'xlarge', vertical: pad }}
              >
                align top to bottom
              </Box>
            </Drop>
          )}
          <Box
            background="dark-3"
            pad="medium"
            align="center"
            ref={topRightTargetRef}
          >
            Target
          </Box>
          {topRightTargetRef.current && (
            <Drop
              align={{ bottom: 'top', right: 'right' }}
              target={topRightTargetRef.current}
              responsive
            >
              <Box
                height={pad === 'small' ? 'xsmall' : undefined}
                pad={{ horizontal: 'xlarge', vertical: pad }}
              >
                align bottom to top
              </Box>
            </Drop>
          )}
        </Box>

        <Box direction="row" justify="between">
          <Box background="dark-3" pad="medium" ref={bottomLeftTargetRef}>
            Target
          </Box>
          {bottomLeftTargetRef.current && (
            <Drop
              align={{ bottom: 'top', left: 'left' }}
              target={bottomLeftTargetRef.current}
              responsive
            >
              <Box
                height={pad === 'small' ? 'xsmall' : undefined}
                pad={{ horizontal: 'xlarge', vertical: pad }}
              >
                align bottom to top
              </Box>
            </Drop>
          )}
          <Box background="dark-3" pad="medium" ref={bottomRightTargetRef}>
            Target
          </Box>
          {bottomRightTargetRef.current && (
            <Drop
              align={{ top: 'bottom', right: 'right' }}
              target={bottomRightTargetRef.current}
              responsive
            >
              <Box
                height={pad === 'small' ? 'xsmall' : undefined}
                pad={{ horizontal: 'xlarge', vertical: pad }}
              >
                align top to bottom
              </Box>
            </Drop>
          )}
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('Drop', module).add('Lazy', () => <LazyDrop />);
