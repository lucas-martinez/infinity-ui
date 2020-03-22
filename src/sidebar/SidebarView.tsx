import PropTypes from 'prop-types';
import React from 'react';
import SidebarListDivider from './SidebarListDivider';
import SidebarListItem from './SidebarListItem';
import SidebarMenu, { SidebarMenuVariant } from './SidebarMenu';
import useSidebar from './useSidebar';

export interface SidebarViewProps {
  variant?: SidebarMenuVariant;
}

const SidebarView = ({ variant, ...spread }: SidebarViewProps) => {
  const { lists, menus } = useSidebar();

  return (
    <>
      {Object.entries(menus).map(([menuKey, menu]) => {
        const list = lists[menuKey];
        const listItemTuples = list ? Object.entries(list) : [];
        const menuItemTuples = menu.items ? Object.entries(menu.items) : [];
        return (
          <SidebarMenu
            key={menuKey}
            menuKey={menuKey}
            variant={variant}
            {...menu}
          >
            {listItemTuples.map(([itemKey, item]) => {
              if (typeof item === 'string') {
                return (<SidebarListDivider key={`${menuKey}-${itemKey}`}>{item}</SidebarListDivider>);
              }
              return (
                <SidebarListItem
                  key={`${menuKey}-${itemKey}`}
                  itemKey={itemKey}
                  menuKey={menuKey}
                  {...item}
                />
              );
            })}
            {menuItemTuples.map(([itemKey, item]) => {
              if (typeof item === 'string') {
                return (<SidebarListDivider key={`${menuKey}-${itemKey}`}>{item}</SidebarListDivider>);
              }
              return (
                <SidebarListItem
                  key={`${menuKey}-${itemKey}`}
                  itemKey={itemKey}
                  menuKey={menuKey}
                  {...item}
                />
              );
            })}
          </SidebarMenu>
        )
      })}
    </>
  );
};

SidebarView.propTypes = {
  animate: PropTypes.bool
};

export default SidebarView;