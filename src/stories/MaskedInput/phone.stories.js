import { storiesOf } from '@storybook/react';
import { Box, MaskedInput } from 'grommet/components';
import React from 'react';


const PhoneMaskedInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <MaskedInput
            mask={[
              { fixed: '(' },
              {
                length: 3,
                regexp: /^[0-9]{1,3}$/,
                placeholder: 'xxx',
              },
              { fixed: ')' },
              { fixed: ' ' },
              {
                length: 3,
                regexp: /^[0-9]{1,3}$/,
                placeholder: 'xxx',
              },
              { fixed: '-' },
              {
                length: 4,
                regexp: /^[0-9]{1,4}$/,
                placeholder: 'xxxx',
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

storiesOf('Grommet 2/MaskedInput', module).add('Phone', () => <PhoneMaskedInput />);
