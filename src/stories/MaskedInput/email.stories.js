import { storiesOf } from '@storybook/react';
import { Box, Grommet, MaskedInput } from 'js/components';
import { grommet } from 'js/themes';
import React from 'react';


const EmailMaskedInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <MaskedInput
            mask={[
              {
                regexp: /^[\w\-_.]+$/,
                placeholder: 'example',
              },
              { fixed: '@' },
              {
                regexp: /^[\w]+$/,
                placeholder: 'my',
              },
              { fixed: '.' },
              {
                regexp: /^[\w]+$/,
                placeholder: 'com',
              },
            ]}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Box>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/MaskedInput', module).add('Email', () => <EmailMaskedInput />);
