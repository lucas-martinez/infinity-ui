import { storiesOf } from '@storybook/react';
import { Box, Button, Grommet, Select } from 'js/components';
import { grommet } from 'js/themes';
import React, { useState } from 'react';


const optionList = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];

const UnSelect = () => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.value);
  };

  const onClickClearOptions = () => {
    setValue('');
  };

  return (
    <>
      <Box
        pad="medium"
        direction="row"
        align="center"
        justify="center"
        gap="small"
      >
        <Select
          options={optionList}
          onChange={e => onChange(e)}
          value={value}
          placeholder="Select multiple options"
          multiple
        />
        <Button
          onClick={onClickClearOptions}
          disabled={!value}
          plain
          label="Clear All"
        />    
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Select', module).add('UnSelect', () => <UnSelect />);
