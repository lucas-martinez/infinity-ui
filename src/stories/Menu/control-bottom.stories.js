import { storiesOf } from '@storybook/react';
import { Box, Menu } from 'grommet/components';
import React from 'react';


const ControlBottom = () => (
  <>
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
  </>
);

storiesOf('Grommet 2/Menu', module).add('Bottom Control Button', () => <ControlBottom />);
