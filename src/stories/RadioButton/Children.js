import { storiesOf } from '@storybook/react';
import { Box, Button, RadioButton } from 'grommet/components';
import { Ascend } from 'grommet-icons';
import React from 'react';


const ChildrenRadioButton = () => {
  const [selected, setSelected] = React.useState();

  return (
    <>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        >
          {({ checked }) => (
            <Ascend color={checked ? 'brand' : 'status-unknown'} />
          )}
        </RadioButton>

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/RadioButton', module).add('Children', () => <ChildrenRadioButton />);
