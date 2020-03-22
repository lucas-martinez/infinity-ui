import { storiesOf } from '@storybook/react';
import { Box, Distribution, Text } from 'grommet/components';
import React from 'react';


const SimpleDistribution = () => (
  <>
    <Distribution
      fill
      values={[
        { value: 50, color: 'light-3' },
        { value: 30, color: 'neutral-1' },
        { value: 20, color: 'brand' },
        { value: 10, color: 'light-3' },
        { value: 5, color: 'neutral-1' },
      ]}
    >
      {value => (
        <Box pad="xsmall" background={value.color} fill>
          <Text size="large">{value.value}</Text>
        </Box>
      )}
    </Distribution>
  </>
);

storiesOf('Grommet 2/Distribution', module).add('Simple', () => <SimpleDistribution />);
