import { storiesOf } from '@storybook/react';
import { Box, Select } from 'grommet/components';
import React, { useState } from 'react';


const DarkSelect = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <>
      <Box fill background="dark-1" align="center" justify="center">
        <Select
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Select', module).add('Dark', () => <DarkSelect />);
