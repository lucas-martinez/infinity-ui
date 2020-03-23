import { storiesOf } from '@storybook/react';
import { Box, Carousel } from 'grommet/components';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import React from 'react';

const SimpleCarousel = ({ initialChild, ...props }) => {
  return (
    <>
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
    </>
  );
};

storiesOf('Grommet 2/Carousel', module)
  .add('Simple', () => <SimpleCarousel />)
  .add('Initial Child', () => <SimpleCarousel initialChild={1} />)
  .add('Without Controls', () => (
    <SimpleCarousel controls={false} play={1500} />
  ));
