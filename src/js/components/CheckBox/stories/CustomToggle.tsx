import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'styled-components';

import { Box, Grommet, CheckBox } from 'js';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';

const checkboxCheckStyle = css<any>`
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

  return (
    <Grommet theme={deepMerge(grommet, customToggleTheme)}>
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

storiesOf('CheckBox', module).add('Custom Toggle', () => <ThemedToggle />);
