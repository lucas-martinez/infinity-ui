import { storiesOf } from '@storybook/react';
import React from 'react';
import { Image } from '../../js/components';

const Fallback = () => (
  <>
    <Image
      fallback="//v2.grommet.io/assets/IMG_4245.jpg"
      src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg"
    />
  </>
);

storiesOf('Grommet 2/Image', module).add('Fallback', () => <Fallback />);
