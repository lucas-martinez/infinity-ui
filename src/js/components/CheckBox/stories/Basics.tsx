import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Box, CheckBox, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const SimpleCheckBox = ({ checked: checkedProp, ...rest }) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const onChange = event => setChecked(event.target.checked);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <CheckBox {...rest} checked={checked} onChange={onChange} />
      </Box>
    </Grommet>
  );
};

storiesOf('CheckBox', module)
  .add('Simple', () => <SimpleCheckBox label="Choice" />)
  .add('Toggle', () => <SimpleCheckBox label="Choice" toggle />)
  .add('Disabled', () => <SimpleCheckBox label="Choice" checked disabled />)
  .add('Reverse', () => <SimpleCheckBox label="Choice" reverse />)
  .add('No Label', () => <SimpleCheckBox />);
