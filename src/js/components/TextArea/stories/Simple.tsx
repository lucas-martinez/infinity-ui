import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, TextArea } from '../../../../js';
import { grommet } from '../../../../js/themes';

const SimpleTextArea = props => {
  const [value, setValue] = React.useState<any>('');

  const onChange = event => setValue(event.target.value);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <TextArea value={value} onChange={onChange} {...props} />
      </Box>
    </Grommet>
  );
};

storiesOf('TextArea', module)
  .add('Simple', () => <SimpleTextArea resize />)
  .add('Non resizable', () => <SimpleTextArea resize={false} />);
