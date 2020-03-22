import { storiesOf } from '@storybook/react';
import { Box, RadioButtonGroup } from 'grommet/components';
import React, { useState } from 'react';


const SimpleRadioButtonGroup = ({ value: initialValue, ...props }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <>
      <Box align="center" pad="large">
        <RadioButtonGroup
          name="radio"
          options={[
            { label: 'Choice 1', value: 'c1' },
            { label: 'Choice 2', value: 'c2' },
            { label: 'Choice 3', value: 'c3' },
          ]}
          value={value}
          onChange={event => setValue(event.target.value)}
          {...props}
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/RadioButtonGroup', module).add('Simple', () => (
  <SimpleRadioButtonGroup />
));
