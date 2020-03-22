import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, Button, RadioButton } from 'js';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';

const theme = deepMerge(grommet, {
  radioButton: {
    gap: 'xsmall',
    size: '18px',
    hover: {
      border: {
        color: 'dark-3',
      },
    },
    check: {
      color: {
        light: 'neutral-1',
      },
    },
    icon: {
      size: '10px',
    },
  },
});

const ThemeRadioButton = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Grommet theme={theme}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        />

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </Grommet>
  );
};

storiesOf('RadioButton', module).add('Theme', () => <ThemeRadioButton />);
