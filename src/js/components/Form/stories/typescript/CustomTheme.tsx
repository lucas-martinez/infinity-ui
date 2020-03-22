import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, FormField, grommet, Grommet, TextArea } from '../../../../../js';
import { ThemeType } from '../../../../../js/themes';
import { deepMerge } from '../../../../../js/utils';

const customFormFieldTheme: ThemeType = {
  global: {
    font: {
      size: '13px',
    },
    input: {
      weight: 400,
    },
  },
  formField: {
    label: {
      color: 'dark-3',
      size: 'xsmall',
      margin: { vertical: '0', bottom: 'small', horizontal: '0' },
      weight: 600,
    },
    border: false,
    margin: '0',
  },
};

const CustomFormField = () => (
  <Grommet theme={deepMerge(grommet, customFormFieldTheme)}>
    <Box align="center" pad="large">
      <FormField label="Label" htmlFor="text-area">
        <TextArea id="text-area" placeholder="placeholder" />
      </FormField>
    </Box>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('TypeScript/Form', module).add('Custom Theme', () => (
    <CustomFormField />
  ));
}
