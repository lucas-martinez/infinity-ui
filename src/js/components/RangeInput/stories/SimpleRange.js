import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grommet, RangeInput } from 'js';
import { grommet } from 'js/themes';

const SimpleRangeInput = () => {
  const [value, setValue] = React.useState(5);

  const onChange = event => setValue(event.target.value);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <RangeInput value={value} onChange={onChange} />
      </Box>
    </Grommet>
  );
};

storiesOf('RangeInput', module).add('Simple', () => <SimpleRangeInput />);
