import React from 'react';
import { storiesOf } from '@storybook/react';

import { base } from 'js/themes';
import { deepMerge } from 'js/utils';

import { Box, extendDefaultTheme } from 'js';

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
