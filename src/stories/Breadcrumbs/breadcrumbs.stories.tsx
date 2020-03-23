import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import Breadcrumbs from '../../components/Breadcrumbs';
import BreadcrumbsLink from '../../components/BreadcrumbsLink';
import { Box } from '../../js/components';

const SimpleAccordion = ({ animate = false, multiple = false, ...rest }) => (
  <>
    <Box {...rest}>
      <Breadcrumbs>
        <BreadcrumbsLink variant="master">Master</BreadcrumbsLink>
        <BreadcrumbsLink>Node</BreadcrumbsLink>
        <BreadcrumbsLink>Node</BreadcrumbsLink>
        <BreadcrumbsLink variant="last">Last</BreadcrumbsLink>
      </Breadcrumbs>
    </Box>
  </>
);

if (!isChromatic()) {
  storiesOf('Quantum/TypeScript/BreadcrumbsBox', module)
    
    .add('Simple', () => <SimpleAccordion />)
    .add('Dark no animation', () => <SimpleAccordion animate={false} background="dark-2" />)
    .add('Multiple', () => <SimpleAccordion multiple />);
}
