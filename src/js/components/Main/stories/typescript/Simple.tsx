import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Grommet, Header, Main, Text } from '../../../../../js';
import { grommet } from '../../../../../js/themes';

const Simple = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small">
      <Text size="small">Header</Text>
    </Header>
    <Main pad="small">
      I am Main! Main is a good place to place your content.
    </Main>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('TypeScript/Main', module).add('Simple', () => <Simple />);
}
