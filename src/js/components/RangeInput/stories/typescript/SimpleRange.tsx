import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Grommet, RangeInput } from '../../../../../js';
import { grommet } from '../../../../../js/themes';

const SimpleRangeInput = () => {
  const [value, setValue] = React.useState<any>(5);

  const onChange = event => setValue(event.target.value);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <RangeInput value={value} onChange={onChange} />
      </Box>
    </Grommet>
  );
};

if (!isChromatic()) {
  storiesOf('TypeScript/RangeInput', module).add('Simple', () => (
    <SimpleRangeInput />
  ));
}
