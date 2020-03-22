import { storiesOf } from '@storybook/react';
import { Box, DropButton, Text } from 'grommet/components';
import { Gremlin } from 'grommet-icons';
import React from 'react';


const renderItems = () => (
  <Box>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
  </Box>
);

const MenuItem = () => (
  <Box height="36px" width="36px" align="center">
    <Gremlin />
  </Box>
);

const GremlinDropButton = () => (
  <DropButton
    alignSelf="center"
    margin={{ vertical: 'small' }}
    dropContent={renderItems()}
    dropProps={{ align: { top: 'bottom' } }}
  >
    <MenuItem />
  </DropButton>
);
const MenuDropButton = () => {
  return (
    <>
      <Box fill>
        <Box fill="vertical" width="xxsmall" background="dark-2">
          <GremlinDropButton />
          <Box flex />
          <GremlinDropButton />
        </Box>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/DropButton', module).add('Menu', () => <MenuDropButton />);
