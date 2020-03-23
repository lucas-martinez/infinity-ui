import { createContext } from 'react';
import SidebarState, { SidebarActions } from './SidebarState';
import SidebarTheme from './SidebarTheme';

export type SidebarValue = SidebarState &
  SidebarActions & {
    theme: SidebarTheme;
  };

export const SidebarContext = createContext<SidebarValue>({} as SidebarValue);

export default SidebarContext;
