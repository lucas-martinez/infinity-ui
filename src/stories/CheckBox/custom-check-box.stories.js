import { storiesOf } from '@storybook/react';
import { Box, CheckBox, Grommet } from 'js/components';
import { FormCheckmark } from 'grommet-icons';
import { deepMerge, normalizeColor } from 'js/utils';
import React, { useState } from 'react';


const customCheckBoxTheme = {
  checkBox: {
    border: {
      color: {
        light: 'accent-2',
      },
      // width: 'xsmall',
      radius: '2px',
    },
    check: {
      extend: ({ theme, checked }) => `
        ${checked && `background-color: ${normalizeColor('neutral-1', theme)};`}
        `,
    },
    color: {
      light: 'neutral-3',
      dark: 'neutral-3',
    },
    gap: 'xsmall',
    hover: {
      border: {
        color: undefined,
      },
    },
    icon: {
      size: '18px',
      extend: 'stroke: white;',
    },
    icons: {
      checked: FormCheckmark,
    },
    size: '18px',
    extend: `
      color: #9C9C9C;
    `,
  },
};

const ThemedCheckBox = props => {
  const [checked, setChecked] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <Grommet theme={deepMerge(theme, customCheckBoxTheme)}>
      <Box align="center" pad="large">
        <CheckBox
          {...props}
          label="Choice"
          checked={checked}
          onChange={event => setChecked(event.target.checked)}
        />
      </Box>
    </Grommet>
  );
};

storiesOf('Grommet 2/CheckBox', module).add('Custom', () => <ThemedCheckBox />);
