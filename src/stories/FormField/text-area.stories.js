import { storiesOf } from '@storybook/react';
import { Box, Form, FormField, TextArea } from 'grommet/components';
import React from 'react';


const FormFieldTextArea = props => (
  <>
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
  </>
);

storiesOf('Grommet 2/FormField', module).add('TextArea', () => <FormFieldTextArea />);
