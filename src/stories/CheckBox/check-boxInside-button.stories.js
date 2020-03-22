import { storiesOf } from '@storybook/react';
import { Box, Button, CheckBox, Text } from 'grommet/components';
import React, { useState } from 'react';


const CheckBoxInsideButton = () => {
  const [checked, setChecked] = useState(false);
  const onButtonClick = () => setChecked(!checked);
  const onCheckboxChange = () => {};

  return (
    <>
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
    </>
  );
};

storiesOf('Grommet 2/CheckBox', module).add('Inside a Button', () => (
  <CheckBoxInsideButton />
));
