import { storiesOf } from '@storybook/react';
import { Anchor, Box, Paragraph } from 'grommet/components';
import React from 'react';


const Inline = () => {
  return (
    <>
      <Box align="center" pad="large">
        <Paragraph>
          This is <Anchor label="an inline link" href="#" /> with surrounding
          text.
        </Paragraph>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Anchor', module).add('Inline', () => <Inline />);
