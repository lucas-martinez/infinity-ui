import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, Menu } from 'js';
import { Power, User } from 'grommet-icons';
import { grommet } from 'js/themes';

const Reverse = () => (
  <Grommet theme={grommet}>
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
  </Grommet>
);

storiesOf('Menu', module).add('Reverse', () => <Reverse />);
