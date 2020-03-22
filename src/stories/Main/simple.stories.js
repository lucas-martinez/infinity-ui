import { storiesOf } from '@storybook/react';
import { Header, Main, Text } from 'grommet/components';
import React from 'react';


const Simple = () => (
  <>
    <Header background="light-4" pad="small">
      <Text size="small">Header</Text>
    </Header>
    <Main pad="small">
      I am Main! Main is a good place to place your content.
    </Main>
  </>
);

storiesOf('Grommet 2/Main', module).add('Simple', () => <Simple />);
