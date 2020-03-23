import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, Button, CheckBox, Grommet, Text } from '../../../../js';
import { grommet } from '../../../../js/themes';

const CheckBoxInsideButton = () => {
  const [checked, setChecked] = useState(false);
  const onButtonClick = () => setChecked(!checked);
  const onCheckboxChange = () => {};

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Button hoverIndicator="background" onClick={onButtonClick}>
          <CheckBox
            tabIndex="-1"
            checked={checked}
            label={<Text>Hi</Text>}
            onChange={onCheckboxChange}
          />
        </Button>
      </Box>
    </Grommet>
  );
};

storiesOf('CheckBox', module).add('Inside a Button', () => (
  <CheckBoxInsideButton />
));