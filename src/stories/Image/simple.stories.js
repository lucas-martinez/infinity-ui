import { storiesOf } from '@storybook/react';
import React from 'react';
import { Image } from '../../js/components';

const Simple = () => (
  <>
    <Image src="//v2.grommet.io/assets/IMG_4245.jpg" />
  </>
);

storiesOf('Grommet 2/Image', module).add('Simple', () => <Simple />);
