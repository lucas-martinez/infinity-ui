import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Grommet, Select } from '../../../../js';
import { grommet } from '../../../../js/themes';

const DarkSelect = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState<any>('');

  return (
    <Grommet full theme={grommet}>
      <Box fill background="dark-1" align="center" justify="center">
        <Select
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
    </Grommet>
  );
};

storiesOf('Select', module).add('Dark', () => <DarkSelect />);
