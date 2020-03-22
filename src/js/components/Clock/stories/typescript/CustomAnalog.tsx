import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Clock, Grommet } from '../../../../../js';

const analogClockTheme = {
  clock: {
    analog: {
      size: {
        medium: '200px',
      },
      hour: {
        width: '8px',
        shape: 'square',
        color: 'accent-1',
        size: '30px',
      },
      minute: {
        size: '12px',
        width: '6px',
        color: 'grey',
      },
      second: {
        width: '4px',
        color: 'brand',
        size: '5px',
      },
    },
  },
};

const CustomAnalog = () => (
  <Grommet theme={analogClockTheme}>
    <Box align="center" justify="start" pad="large">
      <Clock type="analog" />
    </Box>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('TypeScript/Clock', module).add('Custom Analog', () => (
    <CustomAnalog />
  ));
}
