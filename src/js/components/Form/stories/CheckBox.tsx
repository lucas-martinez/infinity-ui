import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  Box,
  CheckBox,
  Form,
  FormField,
  grommet,
  Grommet,
} from '../../../../js';

const FormFieldCheckBox = props => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Form>
        <FormField label="Label" htmlFor="check-box" {...props}>
          <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
            <CheckBox id="check-box" label="CheckBox" />
          </Box>
        </FormField>
      </Form>
    </Box>
  </Grommet>
);

storiesOf('Form', module).add('CheckBox', () => <FormFieldCheckBox />);
