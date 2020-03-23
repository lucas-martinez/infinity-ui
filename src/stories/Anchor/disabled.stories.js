import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'grommet/components';
import React from 'react';


const Disabled = () => {
  return (
    <>
      <Box align="center" pad="large">
        <Box margin="small">
          <Anchor disabled label="Disabled Anchor" />
        </Box>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Anchor', module).add('Disabled', () => <Disabled />);
