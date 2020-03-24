import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Grommet, RadioButtonGroup } from '../../../../js';
import { grommet } from '../../../../js/themes';

const DisabledRadioButtonGroup = ({ value: initialValue, ...props }: any) => {
  const [value, setValue] = useState<any>(initialValue);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <RadioButtonGroup
          name="radio"
          options={[
            { label: 'Choice 1', value: 'c1' },
            { label: 'Choice 2', value: 'c2' },
            { label: 'Choice 3', value: 'c3' },
          ]}
          disabled
          value={value}
          onChange={event => setValue(event.target.value)}
          {...props}
        />
      </Box>
    </Grommet>
  );
};

storiesOf('RadioButtonGroup', module).add('Disabled', () => (
  <DisabledRadioButtonGroup />
));
