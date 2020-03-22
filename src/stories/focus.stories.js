import { storiesOf } from '@storybook/react';
import { Anchor, Box, Button, grommet, Grommet, Menu, Text, TextInput } from 'js/components';
import { deepMerge } from 'js/utils';
import React from 'react';
import ThemeDecorator from './ThemeDecorator';

const customFocus = deepMerge(grommet, {
  global: {
    colors: {
      focus: 'neutral-3',
    },
  },
});

const CustomDefaultProps = () => (
  <Grommet theme={customFocus}>
    <Box pad="small" gap="medium" width="medium">
      <Text>
        Focus on the input components and notice the custom focus color
      </Text>
      <TextInput placeholder="hi" />
      <Anchor href="">Anchor</Anchor>
      <Menu
        label="Menu"
        items={[{ label: 'One', onClick: () => { } }, { label: 'Two' }]}
      />
      <Button label="Button" onClick={() => { }} />
    </Box>
  </Grommet>
);

storiesOf('Grommet 2/Theme', module).add('Focus', () => <CustomDefaultProps />);
