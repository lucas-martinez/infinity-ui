import React, { ReactNode, ReactNodeArray, useContext, useMemo } from 'react';
import { ThemeContext } from '../js/contexts';
import { ThemeType } from '../js/themes';
import { deepMerge } from '../js/utils';

export const createSidebarTheme = (base: ThemeType) => ({
  button: {
    circular: {
      borderColor: '#627279'
    }
  },
  colors: {
    background: '#203037',
    icon: 'rgba(255,255,255,0.7)',
    muted: 'rgba(255,255,255,0.3)',
    toggle: 'rgba(255,255,255,0.7)',
    darkest: base.global!.colors!.darkest,
    light: base.global!.colors!['light-1'],
    primary: base.global!.colors!.brand,
  },
  nav: {
    backgroundColor: '#203037',
    fontWeight: 600,
    menu: {
      backgroundColor: '#2e3f47',
    },
    active: {
      backgroundColor: '#1a4261',
    },
    hover: {
      backgroundColor: '#1a4261',
    },
    item: {
      active: {
        icon: {
          color: 'light-2',
        },
        primary: 'light-1',
      },
      gap: 'small',
      height: '32px',
      hover: {
        icon: {
          color: 'light-3',
        }
      },
      icon: {
        color: 'light-4',
        size: '16px'
      },
      indent: '20px',
      primary: 'light-3',
      secondary: 'light-4',
    }
  },
  sidebar: {
    button: {
      borderTop: ''
    }
  },
  font: {},
  active: {
    colors: {
      background: '#1a4261',
      highlight: base.global!.colors!.focus,
      icon: 'rgba(255,255,255,0.8)',
      toggle: 'rgba(255,255,255,0.8)',
    },
    font: {
      weight: 600,
    },
  },
  hover: {
    colors: {
      background: '#1a4261',
      highlight: base.global!.colors!.focus,
      icon: 'rgba(255,255,255,0.8)',
      toggle: 'rgba(255,255,255,0.8)',
    },
    font: {
      weight: 600,
    },
  },
  selected: {
    colors: {
      background: '#1a4261',
      highlight: base.global!.colors!.focus,
      icon: 'rgba(255,255,255,0.8)',
      toggle: 'rgba(255,255,255,0.8)',
    },
    font: {
      weight: 600,
    },
  }
});

type SidebarTheme = ReturnType<typeof createSidebarTheme>;

export type ThemeWithSidebar = ThemeType & { sidebar: SidebarTheme };

export default SidebarTheme;

export const SidebarThemeProvider = ({ children, value }: { children?: ReactNode | ReactNodeArray, value?: SidebarTheme }) => {
  const base = useContext<ThemeType>(ThemeContext);
  const theme = useMemo(
    () => {
      const sidebar = createSidebarTheme(base);
      if (value) {
        deepMerge(sidebar, value) 
      }
      return { sidebar };
    },
    [base, value]
  );
  return (<ThemeContext.Extend value={theme}>{children}</ThemeContext.Extend>);
};