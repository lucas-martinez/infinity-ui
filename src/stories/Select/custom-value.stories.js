import { storiesOf } from '@storybook/react';
import { Box, Select } from 'grommet/components';
import { CaretDown } from 'grommet-icons';
import React, { useState } from 'react';

const CustomSelectValue = ({ ...rest }) => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          plain
          valueLabel={
            <Box
              background="brand"
              width="small"
              round="small"
              overflow="hidden"
              align="center"
            >
              {value || 'Select...'}
            </Box>
          }
          icon={false}
          {...rest}
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Select', module)
  .add('Custom Value', () => <CustomSelectValue />)
  .add('Custom Icon', () => (
    <CustomSelectValue
      icon={
        <Box>
          <CaretDown color="black" />
        </Box>
      }
    />
  ));
