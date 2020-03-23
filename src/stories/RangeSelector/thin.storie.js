import { storiesOf } from '@storybook/react';
import { Box, RangeSelector, Stack, Text } from 'grommet/components';
import React, { useState } from 'react';
import { render } from 'react-dom';


const RANGE_MIN = 0;
const RANGE_MAX = 100;

function Thin({ initialRange = [0, 100], label }) {
  const [range, setRange] = useState(initialRange);

  return (
    <Box gap="small" pad="xlarge">
      {label ? <Text>{label}</Text> : null}
      <Stack>
        <Box background="light-4" height="6px" direction="row" />
        <RangeSelector
          direction="horizontal"
          min={RANGE_MIN}
          max={RANGE_MAX}
          step={1}
          values={range}
          onChange={nextRange => {
            setRange(nextRange);
          }}
        />
      </Stack>
      <Box align="center">
        <Text size="small">{`${range[0]}% - ${range[1]}%`}</Text>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <>
      <Box pad="small">
        <Thin label="My Range Selector" />
      </Box>
    </>
  );
}

render(<App />, document.getElementById('root'));

storiesOf('Grommet 2/RangeSelector', module).add('Thin', () => <App />);
