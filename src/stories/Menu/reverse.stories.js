import { storiesOf } from '@storybook/react';
import { Box, Menu } from 'grommet/components';
import { Power, User } from 'grommet-icons';
import React from 'react';


const Reverse = () => (
  <>
    <Box align="center" pad="large">
      <Menu
        dropProps={{ align: { top: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Home' },
          { label: 'Profile', icon: <User />, gap: 'small' },
          { label: 'Logout', icon: <Power />, reverse: true, gap: 'small' },
        ]}
      />
    </Box>
  </>
);

storiesOf('Grommet 2/Menu', module).add('Reverse', () => <Reverse />);
