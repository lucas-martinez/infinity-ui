import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, Text } from '../../../../js';
import { grommet } from '../../../../js/themes';

const sizes = [
  'xxlarge',
  'xlarge',
  'large',
  'medium',
  'small',
  'xsmall',
  '77px',
];

const All = () => (
  <Grommet theme={grommet}>
    {sizes.map(size => (
      <Box key={size} margin="small">
        <Text size={size}>{`Text ${size}`}</Text>
      </Box>
    ))}
  </Grommet>
);

storiesOf('Text', module).add('All', () => <All />);
