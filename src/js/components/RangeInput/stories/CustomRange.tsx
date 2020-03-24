import { storiesOf } from '@storybook/react';
import { Volume } from 'grommet-icons';
import React from 'react';
import { Box, Grommet, RangeInput } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { deepMerge } from '../../../../js/utils';

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
  const [value, setValue] = React.useState<any>(0.4);

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

storiesOf('RangeInput', module).add('Custom', () => <CustomRangeInput />);
