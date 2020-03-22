import { Dispatch, MouseEventHandler } from 'react';
import deepMerge from '../utils/deepMerge';
import bindActionCreators from '../utils/bindActionCreators';
import { Actions } from 'grommet-icons';

export const SIDEBAR_LISTS_PATCH = 'SIDEBAR_LISTS_PATCH';
export const SIDEBAR_LISTS_UPDATE = 'SIDEBAR_LISTS_UPDATES';
export const SIDEBAR_MENUS_PATCH = 'SIDEBAR_MENUS_PATCH';
export const SIDEBAR_MENUS_UPDATE = 'SIDEBAR_MENUS_UPDATE';
export const SIDEBAR_COLLAPSE = 'SIDEBAR_SIDEBAR_COLLAPSE';
export const SIDEBAR_EXPAND = 'SIDEBAR_EXPAND';
export const SIDEBAR_SET_ACTIVE = 'SIDEBAR_SET_ACTIVE';
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE';

export type SidebarVariant = 'collapsed' | 'expanded';

export interface SidebarItemState {
  disabled?: boolean;
  onClick?: MouseEventHandler;
  primaryIcon?: string;
  primaryOnClick?: MouseEventHandler; // primary icon clicked
  primaryText: string;
  secondaryIcon?: string;
  secondaryOnClick?: MouseEventHandler; // secondary icon clicked
  secondaryText?: string;

  // custom fields:
  [key: string]: any;
}

export type SidebarListItemMap = Record<string, SidebarItemState | string>;

export type SidebarListPatchMap = Record<string, Partial<SidebarListItemMap>>;

export type SidebarListUpdateMap = Record<string, SidebarListItemMap | null>;

export interface SidebarMenuState {
  defaultItemKey?: string;
  disabled?: boolean;
  items: SidebarListItemMap;
  primaryIcon: string;
  primaryText: string;
  secondaryIcon?: string;
  secondaryText?: string;

  // custom fields:
  [key: string]: any;
}

export type SidebarMenuPatchMap = Record<string, Partial<Record<string, SidebarItemState>>>;

export type SidebarMenuUpdateMap = Record<string, SidebarMenuState | null>;

export type SidebarListMap = Record<string, SidebarListItemMap>;

export type SidebarMenuMap = Record<string, SidebarMenuState>;

export default interface SidebarState {
  active: [string?, string?];
  lists: SidebarListMap,
  menus: SidebarMenuMap;
  reverse?: boolean;
  variant?: SidebarVariant;
}

export type SidebarAction = {
  type: typeof SIDEBAR_LISTS_PATCH;
  lists: SidebarListPatchMap;
} | {
  type: typeof SIDEBAR_LISTS_UPDATE;
  // if item is null it will remove that item from the state
  lists: SidebarListUpdateMap;
} | {
  type: typeof SIDEBAR_MENUS_PATCH;
  menus: SidebarMenuPatchMap;
} | {
  type: typeof SIDEBAR_MENUS_UPDATE;
  menus: SidebarMenuUpdateMap;
} | {
  type: typeof SIDEBAR_COLLAPSE;
} | {
  type: typeof SIDEBAR_EXPAND;
} | {
  type: typeof SIDEBAR_SET_ACTIVE;
  active: [string?, string?];
} | {
  type: typeof SIDEBAR_TOGGLE;
};

const collapseSidebar = (): SidebarAction => ({ type: SIDEBAR_COLLAPSE }); 
const expandSidebar = (): SidebarAction => ({ type: SIDEBAR_EXPAND });
const patchSidebarLists = (lists: SidebarListPatchMap): SidebarAction => ({ type: SIDEBAR_LISTS_PATCH, lists }); 
const patchSidebarMenus = (menus: SidebarMenuPatchMap): SidebarAction => ({ type: SIDEBAR_MENUS_PATCH, menus });
const setActive = (active: [string?, string?]): SidebarAction => ({ type: SIDEBAR_SET_ACTIVE, active });
const toggleSidebar = (): SidebarAction => ({ type: SIDEBAR_TOGGLE });
const updateSidebarLists = (lists: SidebarListUpdateMap): SidebarAction => ({ type: SIDEBAR_LISTS_UPDATE, lists }); 
const updateSidebarMenus = (menus: SidebarMenuUpdateMap): SidebarAction => ({ type: SIDEBAR_MENUS_UPDATE, menus });

export const ACTION_CREATORS = {
  collapseSidebar,
  expandSidebar,
  patchSidebarLists,
  patchSidebarMenus,
  setActive,
  toggleSidebar,
  updateSidebarLists,
  updateSidebarMenus
};

export type SidebarActions = typeof ACTION_CREATORS;

export const bindActions = (dispatch: Dispatch<SidebarAction>) => bindActionCreators(ACTION_CREATORS, dispatch) as SidebarActions; 

export const reduce = (state: SidebarState, action: SidebarAction): SidebarState => {
  switch (action.type) {
    case SIDEBAR_LISTS_PATCH:
      return {
        ...state,
        lists: {
          ...state.lists,
          ...Object.entries(action.lists).reduce<any>((patch, [listKey, list]) => {
            const stateListItem = state.lists[listKey];
            patch[listKey] = Object.keys(list).reduce((items, key) => {
              const replace = action.lists[key];
              items[key] = replace || stateListItem[key];
              return items;
            });
            return patch;
          }, {})
        }
      };
    case SIDEBAR_LISTS_UPDATE:
      return {
        ...state,
        lists: {
          ...Object.entries(state.lists).reduce((lists, [key, val]) => action.lists[key] ? lists : Object.assign(lists, { [key]: val }), {}),
          ...Object.entries(action.lists).reduce((lists, [key, val]) => val ? Object.assign(lists, { [key]: val }) : lists, {}),
        }
      };
    case SIDEBAR_MENUS_PATCH:
      return { ...state, menus: deepMerge(state.menus, action.menus) };
    case SIDEBAR_MENUS_UPDATE:
      const keys = new Set([...Object.keys(action.menus), ...Object.keys(action.menus)]);
      return {
        ...state, menus: Array.from(keys).reduce((acc, menuKey) => {
          const actionMenu = action.menus[menuKey];
          if (actionMenu) {
            return Object.assign(acc, { [menuKey]: actionMenu })
          } else if (actionMenu !== null) {
            return Object.assign(acc, { [menuKey]: state.menus[menuKey] })
          }
          return acc;
        }, {})
      };
    case SIDEBAR_COLLAPSE:
      return { ...state, variant: 'collapsed' };
    case SIDEBAR_EXPAND:
      return { ...state, variant: 'expanded' };
    case SIDEBAR_SET_ACTIVE:
        const { active } = action;
        return { ...state, active };
    case SIDEBAR_TOGGLE:
      return { ...state, variant: state.variant === 'expanded' ? 'collapsed' : 'expanded' };
  }
  return state;
};

