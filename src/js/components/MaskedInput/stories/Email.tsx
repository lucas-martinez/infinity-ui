import { storiesOf } from '@storybook/react';
import { MailOption } from 'grommet-icons';
import React from 'react';
import { Box, Grommet, MaskedInput } from '../../../../js';
import { grommet } from '../../../../js/themes';

const EmailMaskedInput = () => {
  const [value, setValue] = React.useState<any>('');

  const emailMask = [
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
  ];

  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <MaskedInput
            icon={<MailOption />}
            mask={emailMask}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <MaskedInput
            reverse
            icon={<MailOption />}
            mask={emailMask}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('MaskedInput', module).add('Email with Icon', () => (
  <EmailMaskedInput />
));
