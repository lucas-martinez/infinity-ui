import { storiesOf } from '@storybook/react';
import { Box, Button, TextInput } from 'js/components';
import { Hide, View } from 'grommet-icons';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';
import React from 'react';


const SimpleTextInput = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput value={value} onChange={onChange} />
        </Box>
      </Box>
    </>
  );
};

const PasswordInput = () => {
  const [value, setValue] = React.useState('');
  const [reveal, setReveal] = React.useState(false);

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

const suggestions = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

const SuggestionsTextInput = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  const onSelect = event => setValue(event.suggestion);

  return (
    <>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            value={value}
            dropProps={{ height: 'small' }}
            onChange={onChange}
            onSelect={onSelect}
            suggestions={suggestions}
          />
        </Box>
      </Box>
    </>
  );
};

const customTheme = deepMerge(grommet, {
  textInput: {
    extend: () => `
      font-size: 20px;
      background: #c9c19f;
      width: 300px;
      margin: 0 auto;
      
      &:focus {
        box-shadow: none;
        border-color: initial;
      }
    `,
    container: {
      extend: () => `
        background: #edf7d2;
        height: 100px;
        width: 400px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        border-radius: 10px;
      `,
    },
    placeholder: {
      extend: () => `
        width: 100%;
        color: #1e1a11;
      `,
    },
    suggestions: {
      extend: () => `
        background: #c9c19f;
        color: #3d3522;
        li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
      `,
    },
  },
});

const ThemedTextInput = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  const onSelect = event => setValue(event.suggestion);

  return (
    <Box fill align="center" justify="start" pad="large">
      <Box width="medium">
        <TextInput
          type="password"
          value={value}
          dropProps={{ height: 'small' }}
          onChange={onChange}
          onSelect={onSelect}
          suggestions={suggestions}
          placeholder={<span>Enter something...</span>}
        />
      </Box>
    </Box>
  );
};

storiesOf('Grommet 2/TextInput', module)
  
  .add('Simple', () => <SimpleTextInput />)
  .add('Password', () => <PasswordInput />)
  .add('Suggestions', () => <SuggestionsTextInput />)
  .add('Themed', () => <ThemedTextInput />);
