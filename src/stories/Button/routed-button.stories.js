import { storiesOf } from '@storybook/react';
import { Box, RoutedButton, Text } from 'grommet/components';
import React from 'react';


const RouteButton = () => (
  <>
    <Box align="center" pad="large">
      <Text margin="medium" size="small">
        Note: RoutedButton will soon be deprecated
      </Text>
      <RoutedButton label="Go" path="/" />
    </Box>
  </>
);

storiesOf('Grommet 2/Button', module).add('RoutedButton', () => <RouteButton />);
