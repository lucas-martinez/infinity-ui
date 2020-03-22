import { storiesOf } from '@storybook/react';
import { Box, Text } from 'grommet/components';
import React from 'react';


const GradientColorBox = () => (
  <>
    <Box
      justify="center"
      align="center"
      pad="xlarge"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      round="large"
    >
      <Text color="white">I have a linear gradient background</Text>
    </Box>
  </>
);

storiesOf('Grommet 2/Box', module).add('Gradient', () => <GradientColorBox />);
