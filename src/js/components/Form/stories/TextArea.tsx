import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  Box,
  Form,
  FormField,
  grommet,
  Grommet,
  TextArea,
} from '../../../../js';

const FormFieldTextArea = props => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Form>
        <FormField
          label="Label"
          htmlFor="text-area"
          {...props}
          component={TextArea}
          placeholder="placeholder"
        />
      </Form>
    </Box>
  </Grommet>
);

storiesOf('Form', module).add('TextArea', () => <FormFieldTextArea />);
