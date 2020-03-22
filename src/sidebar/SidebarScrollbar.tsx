import React, { ReactNode, ReactNodeArray } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import useSidebar from './useSidebar';

const scrollbarsStyle = (minWidth: number) => ({
  alignItems: 'stretch',
  alignContent: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  justifyContent: 'stretch',
  minWidth
})

const renderScrollsView = ({ style, ...spread }) => (
  <div
    className="view"
    {...spread}
    style={{
      ...style,
      alignItems: 'stretch',
      alignContent: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      height: '100%',
      justifyContent: 'stretch',
      overflowX: 'hidden'
    }}
  />
);

export interface SidebarScrollbarProps {
  children?: ReactNode | ReactNodeArray;
}

const SidebarScrollbar = ({ children }: SidebarScrollbarProps) => {
  const { variant } = useSidebar();
  const collapsed = variant === 'collapsed';
  return (
    <Scrollbars
        renderView={renderScrollsView}
        style={scrollbarsStyle(collapsed ? 64 : 256)}
    >
      {children}
    </Scrollbars>
  );
};

export default SidebarScrollbar;