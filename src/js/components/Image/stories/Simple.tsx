import { storiesOf } from '@storybook/react';
import React from 'react';
import { Grommet, Image } from '../../../../js';
import { grommet } from '../../../../js/themes';

const Simple = () => (
  <Grommet theme={grommet}>
    <Image src="//v2.grommet.io/assets/IMG_4245.jpg" />
  </Grommet>
);

storiesOf('Image', module).add('Simple', () => <Simple />);
