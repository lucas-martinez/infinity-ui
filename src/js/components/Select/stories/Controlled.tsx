import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Button, Grommet, Select } from '../../../../js';
import { grommet } from '../../../../js/themes';
import useTheme from '../../Theme/useTheme';

const SimpleSelect = ({ ...rest }: any) => {
  const options = ['one', 'two'];
  const [value, setValue] = useState<any>('');
  const [open, setOpen] = useState<any>(false);
  const theme = useTheme();
  
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
