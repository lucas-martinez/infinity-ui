import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import { Box, InfiniteScroll, Text } from '../../js/components';
import { allItems } from './basics.stories';

/* eslint-disable react/prefer-stateless-function */
class MyItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Box pad="medium" border={{ side: 'bottom' }} align="center">
        <Text>{item}</Text>
      </Box>
    );
  }
}

const ClassChildrenInfiniteScroll = props => (
  <>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => <MyItem key={item} item={item} />}
      </InfiniteScroll>
    </Box>
  </>
);

storiesOf('Grommet 2/InfiniteScroll', module).add('Class Children', () => (
  <ClassChildrenInfiniteScroll />
));
