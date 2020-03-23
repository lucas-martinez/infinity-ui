import { storiesOf } from '@storybook/react';
import { Box, Meter, Stack, Text } from 'grommet/components';
import React from 'react';


const LabelledMeter = () => {
  const meterValue = 30;

  return (
    <>
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
    </>
  );
};

storiesOf('Grommet 2/Meter', module).add('Labelled', () => <LabelledMeter />);
