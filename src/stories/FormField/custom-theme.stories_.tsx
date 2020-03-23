import { storiesOf } from '@storybook/react';
import { Box, FormField, Grommet, TextArea } from '../../js/components';
import { ThemeType } from '../../js/themes';
import { deepMerge } from '../../js/utils';
import React, { useContext } from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { ThemeContext } from '../../js/contexts';

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

const CustomFormField = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Grommet theme={deepMerge(theme || {}, customFormFieldTheme)}>
      <Box align="center" pad="large">
        <FormField label="Label" htmlFor="text-area">
          <TextArea id="text-area" placeholder="placeholder" />
        </FormField>
      </Box>
    </Grommet>
  );
};

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/FormField', module)
    
    .add('Custom Theme', () => <CustomFormField />);
}
