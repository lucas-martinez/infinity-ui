import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, Image } from '../../../../js';
import { grommet } from '../../../../js/themes';

const Fit = () => (
  <Grommet theme={grommet}>
    <Box align="start" gap="medium">
      <Box height="small" width="small" border>
        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="contain" />
      </Box>
      <Box height="small" width="small" border>
        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
      </Box>
    </Box>
  </Grommet>
);

storiesOf('Image', module).add('Fit', () => <Fit />);
