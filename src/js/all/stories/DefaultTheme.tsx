import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, extendDefaultTheme } from '../../../js';
import { base } from '../../../js/themes';
import { deepMerge } from '../../../js/utils';

extendDefaultTheme(
  deepMerge(base, {
    global: {
      colors: {
        brand: 'red',
      },
    },
  }),
);

const CustomDefaultProps = () => (
  <Box background="brand" pad="small">
    Hello
  </Box>
);

storiesOf('Theme', module).add('Extend Default', () => <CustomDefaultProps />);
