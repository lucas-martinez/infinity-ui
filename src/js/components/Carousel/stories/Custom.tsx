import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import React from 'react';
import { Box, Carousel, Grommet } from '../../../../js';

const customTheme = {
  carousel: {
    animation: {
      duration: 400,
    },
    icons: {
      color: 'blue',
    },
    disabled: {
      icons: {
        color: 'grey',
      },
    },
  },
};

const CustomCarousel = ({ controls, ...rest }) => (
  <Grommet theme={customTheme}>
    <Box align="center" pad="large">
      <Carousel controls={controls} {...rest}>
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

storiesOf('Carousel', module).add('Custom Controls', () => <CustomCarousel />);
