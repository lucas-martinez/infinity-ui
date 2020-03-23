import { storiesOf } from '@storybook/react';
import { Add } from 'grommet-icons';
import { Box, Button, Text } from 'grommet/components';
import React from 'react';


const PlainButton = props => (
  <>
    <Box align="center" pad="large">
      <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
        <Box pad="small" direction="row" align="center" gap="small">
          <Add />
          <Text>Add</Text>
        </Box>
      </Button>
    </Box>
  </>
);

storiesOf('Grommet 2/Button', module)
  .add('Active', () => <PlainButton active />)
  .add('Plain', () => <PlainButton />);
