import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import React from 'react';
import { Box, Carousel, Grommet } from '../../../../js';

const SimpleCarousel = ({ initialChild, ...props }) => {
  return (
    <Grommet>
      <Box align="center" pad="large">
        <Carousel initialChild={initialChild} {...props}>
          <Box pad="xlarge" background="accent-1">
            <Attraction size="xlarge" />
          </Box>
          <Box pad="xlarge" background="accent-2">
            <TreeOption size="xlarge" />
          </Box>
          <Box pad="xlarge" background="accent-3">
            <Car size="xlarge" />
          </Box>
        </Carousel>
      </Box>
    </Grommet>
  );
};

storiesOf('Carousel', module)
  .add('Simple', () => <SimpleCarousel />)
  .add('Initial Child', () => <SimpleCarousel initialChild={1} />)
  .add('Without Controls', () => (
    <SimpleCarousel controls={false} play={1500} />
  ));
