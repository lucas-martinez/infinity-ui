import { storiesOf } from '@storybook/react';
import { FormDown } from 'grommet-icons';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Grommet, Menu, Text } from '../../../../../js';
import { grommet } from '../../../../../js/themes';

const CustomMenu = () => (
  <Grommet theme={grommet}>
    <Box
      align="center"
      pad="large"
      background={{ color: 'dark-2', opacity: 0.7 }}
    >
      <Menu
        plain
        icon={false}
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
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('TypeScript/Menu', module).add('Custom', () => <CustomMenu />);
}
