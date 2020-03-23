import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, FormField, grommet, Grommet, Select } from '../../../../js';
import { allOptions } from './data';

const FormFieldSelect = props => {
  const [value, setValue] = useState('');

  return (
    <Grommet theme={grommet}>
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
    </Grommet>
  );
};

storiesOf('Form', module).add('Select', () => <FormFieldSelect />);
