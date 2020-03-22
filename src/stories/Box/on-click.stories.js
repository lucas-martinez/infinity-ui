import { storiesOf } from '@storybook/react';
import { Box, Text } from 'grommet/components';
import { Attraction } from 'grommet-icons';
import React from 'react';


const OnClickBox = () => (
  <>
    <Box justify="center" align="center" pad="large">
      {/* eslint-disable no-alert */}
      <Box
        border
        pad="large"
        align="center"
        round
        gap="small"
        hoverIndicator
        onClick={() => {
          alert('clicked');
        }}
      >
        <Attraction size="large" />
        <Text>Party</Text>
      </Box>
    </Box>
  </>
);

storiesOf('Grommet 2/Box', module).add('onClick', () => <OnClickBox />);
