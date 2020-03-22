import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor, Box, Grommet, Paragraph } from 'js';
import { grommet } from 'js/themes';

const Inline = () => {
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Paragraph>
          This is <Anchor label="an inline link" href="#" /> with surrounding
          text.
        </Paragraph>
      </Box>
    </Grommet>
  );
};

storiesOf('Anchor', module).add('Inline', () => <Inline />);
