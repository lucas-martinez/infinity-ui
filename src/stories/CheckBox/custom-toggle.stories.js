import { storiesOf } from '@storybook/react';
import { Box, CheckBox, Grommet } from 'js/components';
import { ThemeContext } from 'js/contexts';
import { deepMerge } from 'js/utils';
import React, { useContext, useState } from 'react';
import { css } from 'styled-components';


const checkboxCheckStyle = css`
  background-color: #2196f3;
  border-color: #2196f3;
`;

const customToggleTheme = {
  global: {
    colors: {
      'toggle-bg': '#757575',
      'toggle-knob': 'white',
      'toggle-accent': 'accent-2',
    },
  },
  checkBox: {
    border: {
      color: {
        light: 'toggle-bg',
      },
    },
    color: {
      light: 'toggle-knob',
    },
    check: {
      radius: '2px',
    },
    hover: {
      border: {
        color: undefined,
      },
    },
    toggle: {
      background: { light: 'toggle-accent' },
      color: {
        light: 'toggle-knob',
      },
      size: '36px',
      knob: {
        extend: `
          top: -4px;
          box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.12),
           0px 2px 2px 0px rgba(0,0,0,0.24);
        `,
      },
      extend: ({ checked }) => `
        height: 14px;
        ${checked && checkboxCheckStyle}
      `,
    },
    gap: 'xsmall',
    size: '18px',
  },
};

const ThemedToggle = props => {
  const [checked, setChecked] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <Grommet theme={deepMerge(theme, customToggleTheme)}>
      <Box align="center" pad="large">
        <CheckBox
          {...props}
          label="Choice"
          checked={checked}
          onChange={event => setChecked(event.target.checked)}
          toggle
        />
      </Box>
    </Grommet>
  );
};

storiesOf('Grommet 2/CheckBox', module).add('Custom Toggle', () => <ThemedToggle />);
