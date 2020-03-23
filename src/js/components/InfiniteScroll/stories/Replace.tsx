import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Grommet, InfiniteScroll, Text } from '../../../../js';
import { grommet } from '../../../../js/themes';

const allItems = Array(240)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const InfiniteScrollReplace = props => (
  <Grommet theme={grommet}>
    <InfiniteScroll items={allItems} {...props}>
      {item => (
        <Box key={item} pad="medium" border={{ side: 'bottom' }} align="center">
          <Text>{item}</Text>
        </Box>
      )}
    </InfiniteScroll>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('InfiniteScroll', module).add('Replace', () => (
    <InfiniteScrollReplace replace />
  ));
}
