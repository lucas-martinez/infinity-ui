import { storiesOf } from '@storybook/react';
import { Accordion, AccordionPanel, Box } from 'grommet/components';
import React from 'react';


const SimpleAccordion = props => {
  const { animate, multiple, ...rest } = props;
  return (
    <>
      <Box {...rest}>
        <Accordion animate={animate} multiple={multiple}>
          <AccordionPanel label="Panel 1">
            <Box background="light-2" overflow="auto" height="medium">
              <Box height="large" flex={false}>
                Panel 1 contents
              </Box>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Panel 2">
            <Box background="light-2" style={{ height: '50px' }}>
              Panel 2 contents
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Panel 3">
            <Box background="light-2" style={{ height: '300px' }}>
              Panel 3 contents
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Accordion', module)
  
  .add('Simple', () => <SimpleAccordion />)
  .add('Dark no animation', () => (
    <SimpleAccordion animate={false} background="dark-2" />
  ))
  .add('Multiple', () => <SimpleAccordion multiple />);
