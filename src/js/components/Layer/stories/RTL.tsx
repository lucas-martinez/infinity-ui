import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, Layer } from '../../../../js';
import { grommet } from '../../../../js/themes';

const RTLLayer = () => (
  <Grommet theme={grommet} dir="rtl">
    <Layer
      position="start"
      margin={{ vertical: 'small', start: 'xlarge', end: 'medium' }}
    >
      <Box height="small" overflow="auto">
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
      </Box>
    </Layer>
  </Grommet>
);

storiesOf('Layer', module).add('RTL', () => <RTLLayer />);
