import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, RadioButton } from '../../../../js';
import { grommet } from '../../../../js/themes';

const DisabledRadioButton = () => {
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked
          disabled
        />
      </Box>
    </Grommet>
  );
};

storiesOf('RadioButton', module).add('Disabled', () => <DisabledRadioButton />);