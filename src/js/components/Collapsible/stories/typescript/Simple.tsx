import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Button, Collapsible, Grommet, Text } from '../../../../../js';
import { grommet } from '../../../../../js/themes';

const SimpleCollapsible = props => {
  const [open, setOpen] = React.useState<any>(false);

  return (
    <Grommet theme={grommet}>
      <Box align="start" gap="small">
        <Button primary onClick={() => setOpen(!open)} label="Toggle" />
        <Collapsible open={open} {...props}>
          <Box
            background="light-2"
            round="medium"
            pad="medium"
            align="center"
            justify="center"
          >
            <Text>This is a box inside a Collapsible component</Text>
          </Box>
        </Collapsible>
        <Text>This is other content outside the Collapsible box</Text>
      </Box>
    </Grommet>
  );
};
if (!isChromatic()) {
  storiesOf('TypeScript/Collapsible', module).add('Default', () => (
    <SimpleCollapsible />
  ));
}
