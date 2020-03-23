import { storiesOf } from '@storybook/react';
import { Box, Grommet, TextArea } from 'js/components';
import { grommet } from 'js/themes';
import React from 'react';


const FillTextArea = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <>
      <Box
        width="large"
        height="medium"
        border={{ color: 'brand', size: 'medium' }}
      >
        <TextArea value={value} onChange={onChange} fill />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/TextArea', module).add('Fill', () => <FillTextArea />);
