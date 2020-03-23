import { storiesOf } from '@storybook/react';
import React from 'react';
import { Grommet, Heading } from '../../../../js';
import { grommet } from '../../../../js/themes';

const Color = () => (
  <Grommet theme={grommet}>
    <Heading color="accent-1">Colored Heading</Heading>
  </Grommet>
);

storiesOf('Heading', module).add('Color', () => <Color />);
