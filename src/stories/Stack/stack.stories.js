import { storiesOf } from '@storybook/react';
import { Box, Stack } from 'grommet/components';
import React from 'react';


const SimpleStack = () => (
  <>
    <Stack anchor="center">
      <Box pad="large" background="neutral-1" />
      <Box pad="small" background="accent-1" />
    </Stack>
  </>
);

const FillStack = () => (
  <>
    <Stack fill>
      <Box background="brand" fill>
        Test
      </Box>
    </Stack>
  </>
);

storiesOf('Grommet 2/Stack', module)
  
  .add('Simple', () => <SimpleStack />)
  .add('Fill', () => <FillStack />);
