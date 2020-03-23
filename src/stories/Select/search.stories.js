import { storiesOf } from '@storybook/react';
import { Box, Grommet, Select } from 'js/components';
import { grommet } from 'js/themes';
import React, { useState } from 'react';


const defaultOptions = [];
const objectOptions = [];
for (let i = 1; i <= 200; i += 1) {
  defaultOptions.push(`option ${i}`);
  objectOptions.push({
    lab: `option ${i}`,
    val: i,
    dis: i % 5 === 0,
    sel: i % 13 === 0,
  });
}

const SearchSelect = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState('');

  return (
    <>
      <Box fill align="center" justify="start" pad="large">
        <Select
          size="medium"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          onClose={() => setOptions(defaultOptions)}
          onSearch={text => {
            // The line below escapes regular expression special characters:
            // [ \ ^ $ . | ? * + ( )
            const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

            // Create the regular expression with modified value which
            // handles escaping special characters. Without escaping special
            // characters, errors will appear in the console
            const exp = new RegExp(escapedText, 'i');
            setOptions(defaultOptions.filter(o => exp.test(o)));
          }}
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Select', module).add('Search', () => <SearchSelect />);
