import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, Menu } from 'js';
import { grommet } from 'js/themes';

const SimpleMenu = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Menu
        dropProps={{ align: { top: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Launch', onClick: () => {} },
          { label: 'Abort', onClick: () => {} },
          { label: 'Disabled', disabled: true },
        ]}
      />
    </Box>
  </Grommet>
);

storiesOf('Menu', module).add('Simple', () => <SimpleMenu />);
