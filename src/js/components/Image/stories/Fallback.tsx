import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Image } from 'js';
import { grommet } from 'js/themes';

const Fallback = () => (
  <Grommet theme={grommet}>
    <Image
      fallback="//v2.grommet.io/assets/IMG_4245.jpg"
      src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg"
    />
  </Grommet>
);

storiesOf('Image', module).add('Fallback', () => <Fallback />);
