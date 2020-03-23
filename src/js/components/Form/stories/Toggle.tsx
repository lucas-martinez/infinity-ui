import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, CheckBox, FormField, grommet, Grommet } from '../../../../js';

const FormFieldToggle = props => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <FormField label="Label" htmlFor="check-box" {...props}>
        <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
          <CheckBox id="check-box" label="CheckBox" toggle />
        </Box>
      </FormField>
    </Box>
  </Grommet>
);

storiesOf('Form', module).add('Toggle', () => <FormFieldToggle />);
