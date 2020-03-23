import { storiesOf } from './node_modules/@storybook/react';
import React from './node_modules/react';

import CircularButton from './CircularButton';

storiesOf('MicroFocus/CircularButton', module)
  
  .add('Regular Circular Button', () => (<CircularButton />));
