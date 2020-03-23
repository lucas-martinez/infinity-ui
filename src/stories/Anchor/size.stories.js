import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'grommet/components';
import React from 'react';


const Size = () => {
  return (
    <>
      <Box align="center" pad="large">
        {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(
          size => (
            <Box key={size} margin="small">
              <Anchor size={size} label={size} href="#" />
            </Box>
          ),
        )}
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Anchor', module).add('Size', () => <Size />);
