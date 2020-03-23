import React, { ReactNode, ReactNodeArray, useContext, useMemo, useReducer } from 'react';
import { ThemeContext } from '../js/contexts';
import SidebarContext, { SidebarValue } from './SidebarContext';
import SidebarState, { bindActions, reduce } from './SidebarState';
import { createSidebarTheme, ThemeWithSidebar } from './SidebarTheme';

const INITIAL_STATE: SidebarState = {
  active: [],
  lists: {},
  menus: {},
  variant: 'expanded'
};

export interface SessionProviderProps {
  children: ReactNode | ReactNodeArray;
}

export interface SidebarProviderProps {
  children?: ReactNode | ReactNodeArray;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const base = useContext<ThemeWithSidebar>(ThemeContext as any);
  const theme = useMemo(() => (base && base.sidebar) || createSidebarTheme(base), [base]);
  const [state, dispatch] = useReducer(reduce, INITIAL_STATE);
  const actions = useMemo(() => bindActions(dispatch), [dispatch]);
  const value = useMemo<SidebarValue>(() => ({
    ...actions,
    ...state,
    theme
  }), [actions, theme, state]);

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
