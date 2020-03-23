import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, Meter, Stack, Text } from '../../../../js';
import { grommet } from '../../../../js/themes';

const LabelledMeter = () => {
  const meterValue = 30;

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[{ value: meterValue }]}
            size="xsmall"
            thickness="small"
          />
          <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
            <Text size="xlarge" weight="bold">
              {meterValue}
            </Text>
            <Text size="small">%</Text>
          </Box>
        </Stack>
      </Box>
    </Grommet>
  );
};

storiesOf('Meter', module).add('Labelled', () => <LabelledMeter />);
