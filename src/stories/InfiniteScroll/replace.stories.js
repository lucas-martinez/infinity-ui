import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, InfiniteScroll, Text } from '../../js/components';

const allItems = Array(240)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const InfiniteScrollReplace = props => (
  <>
    <InfiniteScroll items={allItems} {...props}>
      {item => (
        <Box key={item} pad="medium" border={{ side: 'bottom' }} align="center">
          <Text>{item}</Text>
        </Box>
      )}
    </InfiniteScroll>
  </>
);

if (!isChromatic()) {
  storiesOf('Grommet 2/InfiniteScroll', module).add('Replace', () => (
    <InfiniteScrollReplace replace />
  ));
}
