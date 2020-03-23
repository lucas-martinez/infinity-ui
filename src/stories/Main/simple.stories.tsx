import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Header, Main, Text } from '../../js/components';

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

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Main', module).add('Simple', () => <Simple />);
}
