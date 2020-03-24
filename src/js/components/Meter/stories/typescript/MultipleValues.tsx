import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Grommet, Meter, Stack, Text } from '../../../../../js';
import { grommet } from '../../../../../js/themes';

const MultipleValues = () => {
  const total = 100;
  const [active, setActive] = useState<any>(0);
  const [label, setLabel] = useState<string | undefined>('');

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[
              {
                value: 70,
                onHover: over => {
                  setActive(over ? 70 : 0);
                  setLabel(over ? 'in use' : undefined);
                },
              },
              {
                value: 30,
                onHover: over => {
                  setActive(over ? 30 : 0);
                  setLabel(over ? 'available' : undefined);
                },
              },
            ]}
            max={100}
            size="small"
            thickness="medium"
          />
          <Box align="center">
            <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
              <Text size="xxlarge" weight="bold">
                {active || total}
              </Text>
              <Text>GB</Text>
            </Box>
            <Text>{label || 'total'}</Text>
          </Box>
        </Stack>
      </Box>
    </Grommet>
  );
};

if (!isChromatic()) {
  storiesOf('TypeScript/Meter', module).add('Multiple Values', () => (
    <MultipleValues />
  ));
}
