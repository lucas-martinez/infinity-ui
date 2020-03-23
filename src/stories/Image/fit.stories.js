import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Image } from '../../js/components';

const Fit = () => (
  <>
    <Box align="start" gap="medium">
      <Box height="small" width="small" border>
        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="contain" />
      </Box>
      <Box height="small" width="small" border>
        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
      </Box>
    </Box>
  </>
);

storiesOf('Grommet 2/Image', module).add('Fit', () => <Fit />);
