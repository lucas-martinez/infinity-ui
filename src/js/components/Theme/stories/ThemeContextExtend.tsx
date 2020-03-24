import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Grommet, Select, Text } from '../../..';
import { grommet } from '../../../themes';
import { deepMerge } from '../../../utils';
import { ThemeExtend } from '../ThemeExtend';

const customTheme = deepMerge(grommet, {
  global: {
    focus: {
      border: {
        color: 'red',
      },
    },
  },
});

const GlobalThemeWithThemeContext = () => {
  const options = ['one', 'two', 'three'];
  const [valueRed, setValueRed] = useState<any>('');
  const [valueBlue, setValueBlue] = useState<any>('');

  return (
    <Grommet theme={customTheme}>
      <Box align="center" pad="large" direction="column" gap="large">
        <Box>
          <Text margin="medium">
            The focus color of this select component is being altered by the
            custom theme that is passed into the Grommet component.
          </Text>
          <Select
            alignSelf="center"
            placeholder="Select"
            value={valueRed}
            options={options}
            onChange={({ option }) => setValueRed(option)}
          />
        </Box>
        <Box>
          <ThemeExtend
            value={{
              global: {
                focus: {
                  border: {
                    color: 'blue',
                  },
                },
              },
            }}
          >
            <Text margin="medium">
              The focus color of this select component is being altered by
              ThemeContext, independent from the custom theme
            </Text>
            <Select
              alignSelf="center"
              placeholder="Select"
              value={valueBlue}
              options={options}
              onChange={({ option }) => setValueBlue(option)}
            />
          </ThemeExtend>
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('Theme', module).add('ThemeExtend', () => (
  <GlobalThemeWithThemeContext />
));
