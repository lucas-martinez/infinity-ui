import { storiesOf } from '@storybook/react';
import { Power, User } from 'grommet-icons';
import React from 'react';
import { Box, Grommet, Menu } from '../../../../js';
import { grommet } from '../../../../js/themes';

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