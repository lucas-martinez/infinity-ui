import { storiesOf } from '@storybook/react';
import { Box, FormField, Select } from 'grommet/components';
import React, { useState } from 'react';


const allOptions = Array(100)
  .fill()
  .map((_, i) => `option ${i + 1}`);

const FormFieldSelect = props => {
  const [value, setValue] = useState('');

  return (
    <>
      <Box align="center" pad="large">
        <FormField label="Label" htmlFor="select" {...props}>
          <Select
            id="select"
            placeholder="placeholder"
            options={allOptions}
            value={value}
            onChange={({ option }) => setValue(option)}
          />
        </FormField>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/FormField', module).add('Select', () => <FormFieldSelect />);
