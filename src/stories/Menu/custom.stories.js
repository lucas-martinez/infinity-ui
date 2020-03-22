import { storiesOf } from '@storybook/react';
import { Box, Menu, Text } from 'grommet/components';
import { FormDown } from 'grommet-icons';
import React from 'react';


const CustomMenu = () => (
  <>
    <Box
      align="center"
      pad="large"
      background={{ color: 'dark-2', opacity: 0.7 }}
    >
      <Menu
        plain
        items={[
          { label: 'Launch', onClick: () => {} },
          { label: 'Abort', onClick: () => {} },
        ]}
      >
        {({ drop, hover }) => {
          const color = hover && !drop ? 'accent-1' : undefined;
          return (
            <Box
              direction="row"
              gap="small"
              pad="small"
              background={hover && drop ? 'light-2' : undefined}
            >
              <Text color={color}>actions</Text>
              <FormDown color={color} />
            </Box>
          );
        }}
      </Menu>
    </Box>
  </>
);

storiesOf('Grommet 2/Menu', module).add('Custom', () => <CustomMenu />);
