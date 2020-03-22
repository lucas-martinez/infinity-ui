import { storiesOf } from '@storybook/react';
import { Box, Button, Collapsible, Text } from 'grommet/components';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';


const SimpleCollapsible = props => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
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
    </>
  );
};
if (!isChromatic()) {
  storiesOf('Grommet 2/Collapsible', module).add('Default (TS)', () => <SimpleCollapsible />);
}
