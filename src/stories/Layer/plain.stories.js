import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Layer, Text } from '../../js/components';

const PlainLayer = () => (
  <>
    <Box fill background="dark-3">
      <Layer margin="medium" plain>
        <Box pad="large" border={{ color: 'accent-1', size: 'large' }}>
          <Text color="accent-2">Text</Text>
        </Box>
      </Layer>
    </Box>
  </>
);

storiesOf('Grommet 2/Layer', module).add('Plain', () => <PlainLayer />);
