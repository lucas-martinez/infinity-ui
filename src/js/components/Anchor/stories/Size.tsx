import { storiesOf } from '@storybook/react';
import React from 'react';
import { Anchor, Box, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const Size = () => {
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(
          size => (
            <Box key={size} margin="small">
              <Anchor size={size} label={size} href="#" />
            </Box>
          ),
        )}
      </Box>
    </Grommet>
  );
};

storiesOf('Anchor', module).add('Size', () => <Size />);