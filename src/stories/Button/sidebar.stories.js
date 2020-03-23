import { storiesOf } from '@storybook/react';
import { Box, Button, Text } from 'grommet/components';
import React, { useState } from 'react';


const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        background={hover ? 'accent-1' : undefined}
        pad={{ horizontal: 'large', vertical: 'medium' }}
      >
        <Text size="large">{label}</Text>
      </Box>
    )}
  </Button>
);

const SidebarButtons = () => {
  const [active, setActive] = useState();
  return (
    <>
      <Box fill direction="row">
        <Box background="neutral-1">
          {['Dashboard', 'Devices', 'Settings'].map(label => (
            <SidebarButton
              key={label}
              label={label}
              active={label === active}
              onClick={() => setActive(label)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Button', module).add('Sidebar', () => <SidebarButtons />);
