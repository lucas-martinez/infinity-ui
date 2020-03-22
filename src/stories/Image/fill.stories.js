import { storiesOf } from '@storybook/react';
import React from 'react';
import { Anchor, Box, Image } from '../../js/components';

const Fill = () => {
  return (
    <>
      <Box align="start" gap="small">
        <Box height="small" width="small" border>
          <Anchor href="#">
            <Image fit="cover" fill src="//v2.grommet.io/assets/IMG_4245.jpg" />
          </Anchor>
        </Box>
        <Box height="small" width="small" border>
          <Anchor href="#">
            <Image
              fit="contain"
              fill
              src="//v2.grommet.io/assets/IMG_4245.jpg"
            />
          </Anchor>
        </Box>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Image', module).add('Fill', () => <Fill />);
