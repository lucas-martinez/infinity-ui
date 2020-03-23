import { storiesOf } from '@storybook/react';
import { Add } from 'grommet-icons';
import React from 'react';
import { Box, Button, Grommet, Text } from '../../../../js';
import { grommet } from '../../../../js/themes';

const PlainButton = props => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
        <Box pad="small" direction="row" align="center" gap="small">
          <Add />
          <Text>Add</Text>
        </Box>
      </Button>
    </Box>
  </Grommet>
);

storiesOf('Button', module)
  .add('Active', () => <PlainButton active />)
  .add('Plain', () => <PlainButton />);
