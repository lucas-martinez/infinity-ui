import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Grommet, List } from '../../js/components';
import { grommet } from '../../js/themes';
import { deepMerge } from '../../js/utils';
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

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/List', module).add('theme', () => <ThemedList />);
}
