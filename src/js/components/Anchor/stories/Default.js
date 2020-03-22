import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor, Box, Grommet } from 'js';
import { grommet } from 'js/themes';

const Default = () => {
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Anchor href="#">Link</Anchor>
      </Box>
    </Grommet>
  );
};

storiesOf('Anchor', module).add('Default', () => <Default />);
