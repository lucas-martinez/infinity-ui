import { useContext } from 'react';
import SidebarContext from './SidebarContext';

const useSidebar = () => {
  const value = useContext(SidebarContext);
  return value;
};

export default useSidebar;