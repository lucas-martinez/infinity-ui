import { storiesOf } from '@storybook/react';
import { Hide, View } from 'grommet-icons';
import React from 'react';
import { Box, Button, TextInput } from '../../../../js';

const PasswordInput = () => {
  const [value, setValue] = React.useState<any>('');
  const [reveal, setReveal] = React.useState<any>(false);

  return (
    <Box
      width="medium"
      direction="row"
      margin="large"
      align="center"
      round="small"
      border
    >
      <TextInput
        plain
        type={reveal ? 'text' : 'password'}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Button
        icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
        onClick={() => setReveal(!reveal)}
      />
    </Box>
  );
};

storiesOf('TextInput', module).add('Password', () => <PasswordInput />);
