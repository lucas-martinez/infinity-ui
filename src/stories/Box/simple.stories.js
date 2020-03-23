import { storiesOf } from '@storybook/react';
import { Anchor, Box, Button, Text } from 'grommet/components';
import { Attraction, Car } from 'grommet-icons';
import React from 'react';


const SimpleBox = () => (
  <>
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      background="dark-2"
      gap="medium"
    >
      <Box
        pad="large"
        align="center"
        background={{ color: 'light-2', opacity: 'strong' }}
        round
        gap="small"
      >
        <Attraction size="large" />
        <Text>Party</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
      <Box pad="large" align="center" background="dark-3" round gap="small">
        <Car size="large" color="light-2" />
        <Text>Travel</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
    </Box>
  </>
);

storiesOf('Grommet 2/Box', module).add('Simple', () => <SimpleBox />);
