import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Meter, Stack, Text } from '../../js/components';

const MultipleValues = () => {
  const total = 100;
  const [active, setActive] = useState<number>();
  const [label, setLabel] = useState<string>();

  return (
    <>
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
    </>
  );
};

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Meter', module).add('Multiple Values', () => (
    <MultipleValues />
  ));
}
