import { storiesOf } from '@storybook/react';
import { Box, CheckBox, FormField } from 'grommet/components';
import React from 'react';


const FormFieldCheckBox = props => (
  <>
    <Box align="center" pad="large">
      <FormField label="Label" htmlFor="check-box" {...props}>
        <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
          <CheckBox id="check-box" label="CheckBox" />
        </Box>
      </FormField>
    </Box>
  </>
);

storiesOf('Grommet 2/FormField', module).add('CheckBox', () => <FormFieldCheckBox />);
