import { storiesOf } from '@storybook/react';
import React from 'react';
import { Grommet, Text } from '../../../../js';
import { grommet } from '../../../../js/themes';

const Color = () => (
  <Grommet theme={grommet}>
    <Text color="accent-1">Colored Text</Text>
  </Grommet>
);

storiesOf('Text', module).add('Color', () => <Color />);
