import { storiesOf } from '@storybook/react';
import { Box, Button, RadioButton } from 'grommet/components';
import React from 'react';


const SimpleRadioButton = () => {
  const [selected, setSelected] = React.useState();

  return (
    <>
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
    </>
  );
};

storiesOf('Grommet 2/RadioButton', module).add('Simple', () => <SimpleRadioButton />);
