import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Anchor, Box, Button, Grommet, Menu, Text, TextInput } from '../js/components';
import { grommet } from '../js/themes';
import { deepMerge } from '../js/utils';

const customFocus = deepMerge(grommet, {
  global: {
    colors: {
      focus: 'neutral-3',
    },
  },
});

const CustomFocusFC = () => (
  <Grommet theme={customFocus}>
    <Box pad="small" gap="medium" width="medium">
      <Text>Focus on the input components and notice the custom focus color</Text>
      <TextInput placeholder="hi" />
      <Anchor href="">Anchor</Anchor>
      <Menu label="Menu" items={[{ label: 'One', onClick: () => {} }, { label: 'Two' }]} />
      <Button label="Button" onClick={() => {}} />
    </Box>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Theme', module)
    
    .add('Focus', () => <CustomFocusFC />);
}
