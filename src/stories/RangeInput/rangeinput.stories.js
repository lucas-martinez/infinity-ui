import { storiesOf } from '@storybook/react';
import { Box, Grommet, RangeInput } from 'js/components';
import { Volume } from 'grommet-icons';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';
import React from 'react';


const SimpleRangeInput = () => {
  const [value, setValue] = React.useState(5);

  const onChange = event => setValue(event.target.value);

  return (
    <>
      <Box align="center" pad="large">
        <RangeInput value={value} onChange={onChange} />
      </Box>
    </>
  );
};

const customThemeRangeInput = deepMerge(grommet, {
  global: {
    spacing: '12px',
  },
  rangeInput: {
    track: {
      color: 'accent-2',
      height: '12px',
      extend: () => `border-radius: 10px`,
    },
    thumb: {
      color: 'neutral-2',
    },
  },
});

const CustomRangeInput = () => {
  const [value, setValue] = React.useState(0.4);

  const onChange = event => setValue(event.target.value);

  return (
    <Grommet theme={customThemeRangeInput}>
      <Box direction="row" align="center" pad="large" gap="small">
        <Volume color="neutral-2" />
        <Box align="center" width="small">
          <RangeInput
            min={0}
            max={1}
            step={0.1}
            value={value}
            onChange={onChange}
          />
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('Grommet 2/RangeInput', module)
  
  .add('Simple', () => <SimpleRangeInput />)
  .add('Custom', () => <CustomRangeInput />);
