import { storiesOf } from '@storybook/react';
import React from 'react';
import { Anchor, Box, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const Disabled = () => {
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Box margin="small">
          <Anchor disabled label="Disabled Anchor" />
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('Anchor', module).add('Disabled', () => <Disabled />);
