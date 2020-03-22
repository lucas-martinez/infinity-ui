import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, InfiniteScroll, Text } from '../../js/components';
import { allItems } from './basics.stories';

const OnMoreInfiniteScroll = ({ props }) => {
  const [items, setItems] = useState(allItems.slice(0, 50));

  const onMore = () => {
    setTimeout(() => {
      setItems(allItems.slice(0, items.length + 50));
    }, 1000);
  };

  return (
    <>
      <Box>
        <InfiniteScroll items={items} onMore={onMore} {...props}>
          {item => (
            <Box
              key={item}
              pad="medium"
              border={{ side: 'bottom' }}
              align="center"
            >
              <Text>{item}</Text>
            </Box>
          )}
        </InfiniteScroll>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/InfiniteScroll', module)
  .add('onMore', () => <OnMoreInfiniteScroll />)
  .add('onMore step', () => <OnMoreInfiniteScroll step={75} />);
