import { storiesOf } from '@storybook/react';
import { Box, FormField, Grommet, TextArea } from 'js/components';
import { deepMerge } from 'js/utils';
import React from 'react';


const customFormFieldTheme = {
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
    margin: 0,
  },
};

const CustomFormField = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Grommet theme={deepMerge(theme, customFormFieldTheme)}>
      <Box align="center" pad="large">
        <FormField label="Label" htmlFor="text-area">
          <TextArea id="text-area" placeholder="placeholder" />
        </FormField>
      </Box>
    </Grommet>
  );
}

storiesOf('Grommet 2/FormField', module).add('Custom Theme', () => <CustomFormField />);
