import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Button, Grommet, RadioButton } from '../../../../js';
import { grommet } from '../../../../js/themes';

const SimpleRadioButton = () => {
  const [selected, setSelected] = React.useState<any>();

  return (
    <Grommet theme={grommet}>
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

storiesOf('RadioButton', module).add('Simple', () => <SimpleRadioButton />);
