import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, Menu } from '../../../../js';
import { grommet } from '../../../../js/themes';

const ControlBottom = () => (
  <Grommet theme={grommet}>
    <Box height="medium" justify="center" align="center" pad="large">
      <Menu
        dropProps={{ align: { bottom: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Profile', onClick: () => {} },
          { label: 'Settings', onClick: () => {} },
          { label: 'FAQ', onClick: () => {} },
        ]}
      />
    </Box>
  </Grommet>
);

storiesOf('Menu', module).add('Bottom Control Button', () => <ControlBottom />);
