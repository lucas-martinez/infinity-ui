import React, { cloneElement, MouseEventHandler, useCallback, useMemo } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../components/Icon/Icon';
import { Box, BoxProps } from '../js/components/Box';
import { Text } from '../js/components/Text';
import { SidebarItemState } from './SidebarState';
import useSidebar from './useSidebar';

const ICON_SIZE = 'medium';

const IconStyled = styled<any>(Icon)`
  ${props => props.onClick && css`
    &:hover {
      background-color: ${props.theme?.sidebar?.nav?.backgroundColor};
      border-radius: 16px;
    }
  `}
`;

const TextStyled = styled<any>(Text)`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${props => props.active && css`
    color: ${props.theme?.sidebar?.colors?.light};
  `}
`;

export const BoxStyled = styled<any>(Box)`
  ${props => css`
    border-top: 1px solid ${props.theme?.sidebar?.nav?.backgroundColor};
  `}
  
  cursor: pointer;

  [role=button] {
    visibility: hidden;
  }

  &:hover {
    ${props => css`
      background-color: ${props.theme?.sidebar?.nav?.hover?.backgroundColor};
      &::after {
        background-color: ${props.theme?.sidebar?.nav?.hover?.backgroundColor};
      }
    `}

    [role=button] {
      visibility: visible;
    }
  }

  ${props => props.text && css`
    position: relative;
    &::after {
      border-radius: 0 0 4px 4px;
      color: ${props.theme?.sidebar?.colors?.muted};
      content: "${props.text}";
      display: block;
      font-size: 9px;
      font-weight: lighter;
      height: 12px;
      left: calc(50% - 35px);
      letter-spacing: .1em;
      line-height: 9px;
      overflow: visible;
      position: absolute;
      padding: 0 6px 0 6px;
      text-transform: uppercase;
      top: 24px;
      z-index: 0;
    }
  `}
  ${props => props.text && props.active && css`
    &::after {
      background-color: ${props.theme?.sidebar?.nav?.active?.backgroundColor};
    }
  `}
`;

const renderIcon = (icon?: string, onClick?: MouseEventHandler, props?: any) => {
  const boxProps: any = { pad: 'xsmall' };
  const iconProps: any = { ...props, onClick };
  if (onClick) {
    boxProps.role = 'button';
  }
  if (typeof icon === 'undefined') {
    return null;
  }
  if (typeof icon === 'string') {
    return (
      <Box {...boxProps}>
        <IconStyled {...iconProps}>{icon}</IconStyled>
      </Box>
    );
  }
  return <Box {...boxProps}>{cloneElement(icon, iconProps)}</Box>;
};

export interface SidebarListItemProps extends SidebarItemState, Omit<BoxProps, 'onClick'> {
  active?: boolean;
  itemKey: string;
  menuKey: string;
}

const SidebarListItem = ({
  active,
  itemKey,
  menuKey,
  onClick,
  primaryIcon,
  primaryOnClick,
  primaryText,
  secondaryIcon,
  secondaryOnClick,
  secondaryText,
  ...spread
}: SidebarListItemProps) => {
  const {
    active: [activeMenuKey, activeItemKey],
    setActive,
    theme,
  } = useSidebar();

  const isActive =
    typeof active === 'boolean' ? active : menuKey === activeMenuKey && itemKey === activeItemKey;

  const handleClick = useCallback(
    ev => {
      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      if (typeof onClick === 'function') {
        return onClick(ev);
      }
      if (typeof active === 'boolean') {
        return;
      }
      setActive([menuKey, itemKey]);
    },
    [active, itemKey, menuKey, onClick, setActive]
  );

  const iconProps = useMemo(
    () => ({
      color: active ? theme?.nav?.item?.active?.icon?.color : theme?.nav?.item?.icon?.color,
      size: ICON_SIZE,
    }),
    [active, theme]
  );

  const primary = useMemo(() => renderIcon(primaryIcon, primaryOnClick, iconProps), [
    primaryIcon,
    primaryOnClick,
    iconProps,
  ]);

  const secondary = useMemo(() => renderIcon(secondaryIcon, secondaryOnClick, iconProps), [
    secondaryIcon,
    secondaryOnClick,
    iconProps,
  ]);

  const containerProps = useMemo<BoxProps>(
    () => ({
      align: 'center',
      background: {
        color: isActive ? theme?.nav?.active?.backgroundColor : theme?.nav?.backgroundColor,
      },
      color: isActive ? theme?.colors?.light : theme?.colors?.light,
      direction: 'row',
      focusIndicator: false,
      full: true,
      // gap: spec.nav.item.gap,
      height: theme?.nav?.item?.height,
      hoverIndicator: {
        color: theme?.nav?.hover?.backgroundColor,
      },
      onClick: handleClick,
      ...spread,
    }),
    [isActive, primary, secondary, spread, theme]
  );

  const pad = {
    left: 'medium',
    right: 'xsmall'
  };

  const margin = !primary ? {
    left: ICON_SIZE
  } : undefined;

  return (
    <BoxStyled
      active={isActive}
      pad={pad}
      text={secondaryText}
      {...containerProps}
    >
      {primary}
      <TextStyled active={isActive} margin={margin}>
        {primaryText}
      </TextStyled>
      {secondary}
    </BoxStyled>
  );
};

export default SidebarListItem;
