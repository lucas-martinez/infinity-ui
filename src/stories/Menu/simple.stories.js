import { storiesOf } from '@storybook/react';
import { Box, Menu } from 'grommet/components';
import React from 'react';


const SimpleMenu = () => (
  <>
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
  </>
);

storiesOf('Grommet 2/Menu', module).add('Simple', () => <SimpleMenu />);
