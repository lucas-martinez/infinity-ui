import { storiesOf } from './node_modules/@storybook/react';
import React from './node_modules/react';

import FlatButton from './FlatButton';

storiesOf('MicroFocus/FlatButton', module)
  
  .add('Default Flat Button', () => (<FlatButton />))
  .add('Accent Flat Button', () => (<FlatButton color="accent" />))
  .add('Critical Flat Button', () => (<FlatButton color="critical" />))
  .add('Primary Flat Button', () => (<FlatButton color="primary" />))
  .add('Secondary Flat Button', () => (<FlatButton color="secondary" />))
  .add('Success Flat Button', () => (<FlatButton color="success" />));
