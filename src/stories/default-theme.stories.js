import { storiesOf } from '@storybook/react';
import { Box } from 'js/components';
import { extendDefaultTheme } from 'js';
import { base } from 'js/themes';
import { deepMerge } from 'js/utils';
import React from 'react';
import ThemeDecorator from './ThemeDecorator';

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

storiesOf('Grommet 2/Theme', module).add('Extend Default', () => <CustomDefaultProps />);
