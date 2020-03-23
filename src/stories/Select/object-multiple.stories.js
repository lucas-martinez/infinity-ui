import { storiesOf } from '@storybook/react';
import { Box, Select } from 'grommet/components';
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

const ObjectMultiSelect = () => {
  const [options, setOptions] = useState(objectOptions);
  const [value, setValue] = useState('');

  return (
    <>
      <Box fill align="center" justify="start" pad="large">
        <Select
          size="medium"
          placeholder="Select"
          multiple
          closeOnChange={false}
          disabledKey="dis"
          labelKey="lab"
          valueKey="val"
          value={value}
          options={options}
          onChange={({ value: nextValue }) => setValue(nextValue)}
          onClose={() => setOptions(objectOptions)}
          onSearch={text => {
            // The line below escapes regular expression special characters:
            // [ \ ^ $ . | ? * + ( )
            const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

            // Create the regular expression with modified value which
            // handles escaping special characters. Without escaping special
            // characters, errors will appear in the console
            const exp = new RegExp(escapedText, 'i');
            setOptions(objectOptions.filter(o => exp.test(o.lab)));
          }}
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Select', module).add('Object Multiple', () => <ObjectMultiSelect />);
