import { storiesOf } from '@storybook/react';
import { Box, Button, Grommet, Select } from 'js/components';
import { grommet } from 'js/themes';
import React, { useState } from 'react';


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

storiesOf('Grommet 2/Select', module).add('Controlled', () => <SimpleSelect />);
