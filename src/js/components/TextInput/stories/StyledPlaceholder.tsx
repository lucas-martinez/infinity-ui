import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Form, Text, TextInput } from '../../../../js';

const StyledPlaceholder = () => {
  return (
    <Box>
      <Form>
        <TextInput name="name" placeholder={<Text>footer</Text>} />
      </Form>
    </Box>
  );
};

storiesOf('TextInput', module).add('StyledPlaceholder', () => (
  <StyledPlaceholder />
));
