import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, List } from 'js';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';

import { locations } from './data';

const theme = deepMerge(grommet, {
  list: {
    item: {
      pad: { horizontal: 'large', vertical: 'xsmall' },
      background: ['white', 'light-2'],
      border: true,
    },
  },
});

const ThemedList = () => (
  <Grommet theme={theme}>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </Grommet>
);

storiesOf('List', module).add('theme', () => <ThemedList />);
