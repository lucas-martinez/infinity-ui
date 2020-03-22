import { storiesOf } from '@storybook/react';
import { Box, Grommet, TextArea } from 'js/components';
import { grommet } from 'js/themes';
import React from 'react';

const SimpleTextArea = props => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <>
      <Box align="center" pad="large">
        <TextArea value={value} onChange={onChange} {...props} />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/TextArea', module)
  .add('Simple', () => <SimpleTextArea resize />)
  .add('Non resizable', () => <SimpleTextArea resize={false} />);
