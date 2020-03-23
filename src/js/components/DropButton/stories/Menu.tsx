import { storiesOf } from '@storybook/react';
import { Gremlin } from 'grommet-icons';
import React from 'react';
import { Box, DropButton, Grommet, Text } from '../../../../js';
import { grommet } from '../../../../js/themes';

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
    <Grommet theme={grommet} full>
      <Box fill>
        <Box fill="vertical" width="xxsmall" background="dark-2">
          <GremlinDropButton />
          <Box flex />
          <GremlinDropButton />
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('DropButton', module).add('Menu', () => <MenuDropButton />);
