import { storiesOf } from '@storybook/react';
import { FormField, Grommet, Tab, Tabs, TextInput } from 'js/components';
import { CircleInformation, Currency } from 'grommet-icons';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';
import React from 'react';
import { css } from 'styled-components';

import { RichTabTitle } from './rich.storie';

const customTheme = deepMerge(grommet, {
  global: {
    edgeSize: {
      small: '10px',
    },
    elevation: {
      light: {
        small: '0px 1px 5px rgba(0, 0, 0, 0.50)',
        medium: '0px 3px 8px rgba(0, 0, 0, 0.50)',
      },
    },
  },
  tab: {
    active: {
      background: 'dark-1',
      color: 'accent-1',
    },
    background: 'dark-3',
    border: undefined,
    color: 'white',
    hover: {
      background: 'dark-1',
    },
    margin: undefined,
    pad: {
      bottom: undefined,
      horizontal: 'small',
    },
    extend: ({ theme }) => css`
      border-radius: ${theme.global.control.border.radius};
      box-shadow: ${theme.global.elevation.light.small};
    `,
  },
  tabs: {
    background: 'dark-3',
    gap: 'medium',
    header: {
      background: 'dark-2',
      extend: ({ theme }) => css`
        padding: ${theme.global.edgeSize.small};
        box-shadow: ${theme.global.elevation.light.medium};
      `,
    },
    panel: {
      extend: ({ theme }) => css`
        padding: ${theme.global.edgeSize.large};
        box-shadow: ${theme.global.elevation.light.medium};
      `,
    },
  },
});

const CustomTabs = () => (
  <Grommet theme={customTheme}>
    <Tabs>
      <Tab
        title={
          <RichTabTitle
            icon={<CircleInformation color="accent-1" />}
            label="Personal Data"
          />
        }
      >
        <FormField label="Name">
          <TextInput placeholder="Enter your name..." />
        </FormField>
      </Tab>
      <Tab
        title={
          <RichTabTitle icon={<Currency color="light-3" />} label="Payment" />
        }
      >
        <FormField label="Card Number">
          <TextInput placeholder="Enter your card number..." />
        </FormField>
      </Tab>
      <Tab title="Simple Tab">
        This Tab has a different styling than the RichTabTitle (e.g
        tab.active.color)
      </Tab>
    </Tabs>
  </Grommet>
);

storiesOf('Grommet 2/Tabs', module).add('Custom Theme', () => <CustomTabs />);