import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import Alert from '../../Alert/Alert';
import { Box } from '../../js/components';

const SimpleAccordion = ({ animate = false, multiple = false, ...rest }) => (
  <>
    <Box {...rest}>
      <Alert type="error" />
    </Box>
  </>
);

if (!isChromatic()) {
  storiesOf('Quantum/TypeScript/AlertBox', module)
    
    .add('Simple', () => <SimpleAccordion />)
    .add('Dark no animation', () => <SimpleAccordion animate={false} background="dark-2" />)
    .add('Multiple', () => <SimpleAccordion multiple />);
}
