import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Grommet, Select, Text, ThemeContext } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { deepMerge } from '../../../../js/utils';

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
  const [valueRed, setValueRed] = useState('');
  const [valueBlue, setValueBlue] = useState('');

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
          <ThemeContext.Extend
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
          </ThemeContext.Extend>
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('Theme', module).add('ThemeContext.Extend', () => (
  <GlobalThemeWithThemeContext />
));
