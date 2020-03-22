import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grid, Image, InfiniteScroll, Text } from '../../js/components';
import { allItems } from './basics.stories';

const GridInfiniteScroll = () => (
  <>
    <Grid columns="xsmall" rows="small">
      <InfiniteScroll items={allItems} step={12}>
        {item => (
          <Box key={item} as="article" pad="xsmall">
            <Image src="https://via.placeholder.com/350x150" />
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Grid>
  </>
);

storiesOf('Grommet 2/InfiniteScroll', module).add('Grid', () => <GridInfiniteScroll />);
