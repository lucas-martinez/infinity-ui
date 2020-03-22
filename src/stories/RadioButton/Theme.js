import { storiesOf } from '@storybook/react';
import { Box, Button, Grommet, RadioButton } from 'js/components';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';
import React from 'react';


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

storiesOf('Grommet 2/RadioButton', module).add('Theme', () => <ThemeRadioButton />);
