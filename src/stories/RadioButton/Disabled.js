import { storiesOf } from '@storybook/react';
import { Box, RadioButton } from 'grommet/components';
import React from 'react';


const DisabledRadioButton = () => {
  return (
    <>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked
          disabled
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/RadioButton', module).add('Disabled', () => <DisabledRadioButton />);
