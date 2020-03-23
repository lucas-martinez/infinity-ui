import { storiesOf } from '@storybook/react';
import { Box, Grommet, TextArea } from 'js/components';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';
import React from 'react';


const customTheme = deepMerge(grommet, {
  textArea: {
    extend: () => `
      font-size: 40px;
      color: red;
    `,
  },
});

const ThemedTextArea = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Grommet theme={customTheme}>
      <Box
        width="large"
        height="medium"
        border={{ color: 'brand', size: 'medium' }}
      >
        <TextArea value={value} onChange={onChange} fill />
      </Box>
    </Grommet>
  );
};

storiesOf('Grommet 2/TextArea', module).add('Themed', () => <ThemedTextArea />);
