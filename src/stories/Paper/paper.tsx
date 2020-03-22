import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import Paper from '../../components/Paper';
import { Box } from '../../js/components';


const SimpleAccordion = ({ animate = false, multiple = false, ...rest }) => (
  <>
    <Box {...rest}>
      <Paper />
    </Box>
  </>
);

if (!isChromatic()) {
  storiesOf('Quantum/TypeScript/Paper', module)
    
    .add('Simple', () => <SimpleAccordion />)
    .add('Dark no animation', () => <SimpleAccordion animate={false} background="dark-2" />)
    .add('Multiple', () => <SimpleAccordion multiple />);
}
