import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Button, Grommet, Select } from '../../../../js';
import { grommet } from '../../../../js/themes';

const SimpleSelect = ({ theme, ...rest }) => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <Grommet full theme={theme || grommet}>
      <Box fill align="center" justify="start" pad="large" gap="small">
        <Button onClick={() => setOpen(!open)} label="Control the select" />
        <Select
          id="select"
          name="select"
          placeholder="Select"
          open={open}
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          {...rest}
        />
      </Box>
    </Grommet>
  );
};

storiesOf('Select', module).add('Controlled', () => <SimpleSelect />);
