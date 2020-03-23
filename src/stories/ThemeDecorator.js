import microfocus from '@micro-focus/quantum-ux-grommet-theme-v2';
import { boolean, select } from '@storybook/addon-knobs';
import { aruba } from 'grommet-theme-aruba';
import { dxc } from 'grommet-theme-dxc';
import { hp } from 'grommet-theme-hp';
import { hpe } from 'grommet-theme-hpe';
import { v1 } from 'grommet-theme-v1';
import { Box, CheckBox, Grid, Grommet, Select } from 'js/components';
import { base, dark, grommet } from 'js/themes';
import React, { useContext, useEffect, useMemo } from 'react';
import ErrorBoundary from '../components/Error/ErrorBoundary';
import { ChooseThemeContext, ChooseThemeProvider } from '../components/ThemeQ';
import hercules from '../themes/hercules';

export const themes = {
  hercules,
  microfocus,
  base,
  dark,
  grommet,
  hpe,
  aruba,
  hp,
  dxc,
  v1,
};

const THEME = 'Theme';
const THEME_DARK = 'Dark Mode';
const THEME_OPTIONS = {
  'Hercules': 'hercules',
  'MicroFocus': 'microfocus',
  'HPE': 'hpe',
  'Aruba': 'aruba',
  'HP': 'hp',
  'DXC': 'dxc',
  'Grommet 2': 'grommet',
  'Grommet 1': 'v1',
  'Grommet Dark': 'dark',
  'Grommet Base': 'base'
};

select(THEME, THEME_OPTIONS, 'hercules', 'theme');
boolean(THEME_DARK, false, 'theme');

const ThemeSelector = ({ children }) => {
  const { canMode, theme, themeMode, setTheme, setThemeMode, themes } = useContext(ChooseThemeContext);

  const theme_option = select(THEME, THEME_OPTIONS);
  const dark_mode = boolean(THEME_DARK);

  const themeName = useMemo(() => {
    const entries = Object.entries(themes);
    const filtered = entries.filter(([, val]) => (val === theme));
    const keys = filtered.map(([key]) => key);
    const key = keys.length ? keys[0] : '';
    return key;
  }, [theme, themes, setTheme, setThemeMode]);

  useEffect(() => {
    if (!theme_option) {
      document.search
      select(THEME, THEME_OPTIONS, themeName);
    } else {
      setTheme(themes[theme_option]);
    }
  }, [theme_option]);

  useEffect(() => {
    if (typeof dark_mode === undefined) {
      boolean(THEME_DARK, themeMode === 'dark')
    } else if (dark_mode !== (themeMode === 'dark')) {
      setThemeMode(dark_mode ? 'dark' : 'light');
    }
  }, [dark_mode]);

  const selectTheme = (name) => {
    select(THEME, THEME_OPTIONS, name);
    /*
    window.queryparams.addParameters({
      query: {
        theme: name,
        dark: themeMode === 'dark'
      }
    });
    */
    setTheme(themes[name]);
  }

  const selectThemeMode = (dark) => {
    boolean(THEME_DARK, dark);
    /*
    window.queryparams.addParameters({
      query: {
        theme: themeName,
        dark: dark
      }
    });
    */
    setThemeMode(dark ? 'dark' : 'light');
  };

  return (
    <ErrorBoundary fallback={(error) => (<em>{`${error.message} ${error.stack}`}</em>)}>
      <Box
        pad="small"
        align="center"
        background={{ color: 'light-2', opacity: 'weak' }}
        gap="small"
      >
        <Grid
          columns={{
            count: 2,
            size: 'auto',
          }}
          gap="small"
        >
          <Select
            placeholder="Select Theme"
            value={themeName}
            options={Object.keys(themes)}
            onChange={({ option }) => selectTheme(option)}
          />
          <CheckBox
            disabled={!canMode}
            label="Theme Mode"
            checked={themeMode === 'dark'}
            onChange={event => selectThemeMode(event.target.checked)}
            toggle={true}
          />
        </Grid>
      </Box>
      <Grommet full={true} theme={theme} themeMode={themeMode || 'light'}>{children}</Grommet>
    </ErrorBoundary>
  );
};


const ThemeDecorator = storyFn => (
  <ChooseThemeProvider theme={themes.hercules} themes={themes}>
    <ThemeSelector>
      {storyFn()}
    </ThemeSelector>
  </ChooseThemeProvider>
);

export default ThemeDecorator;