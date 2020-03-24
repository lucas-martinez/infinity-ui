import React, { ReactNode, ReactNodeArray, useCallback, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../components/IconQ/Icon';
import { Box, BoxProps } from '../js/components/Box';
import { Collapsible } from '../js/components/Collapsible';
import { Drop } from '../js/components/Drop';
import { Text } from '../js/components/Text';
import { SidebarMenuState } from './SidebarState';
import SidebarTheme from './SidebarTheme';
import useSidebar from './useSidebar';

export type SidebarMenuVariant = 'accordion' | 'drop-above' | 'drop-below' | 'overflow';

const ContainerBoxStyled = styled.div<any>`
  display: flex;
  ${props =>
    !props.reverse
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: column-reverse;
        `}
  min-width: 64px;
`;

const BoxStyled = styled<any & { spec: SidebarTheme }>(Box)`
  display: flex;
  align-items: center;
  border-left: 4px solid transparent;
  cursor: pointer;
  height: 56px;

  ${props => css`
    background: ${props.theme?.sidebar?.nav?.menu?.backgroundColor};
    border-top: 1px solid ${props.theme?.sidebar?.nav?.backgroundColor};
    color: ${props.theme?.sidebar?.colors?.light};

    &:hover {
      background-color: ${props.theme?.sidebar?.nav?.hover?.backgroundColor};
      border-left: 4px solid ${props.theme?.sidebar?.colors?.primary};
    }
  `}

  ${props =>
    props.active &&
    css`
      font-weight: ${props.theme?.sidebar?.nav?.fontWeight};
      background-color: ${props.theme?.sidebar?.nav?.hover?.backgroundColor};
      border-left: 4px solid ${props.theme?.sidebar?.colors?.primary};
    `}
`;

const IconStyled = styled(Icon)`
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const TextStyled = styled<any>(Text)`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: start;
  font-size: 16px;
  letter-spacing: 0.8px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  ${props =>
    props.active &&
    css`
      color: ${props.theme?.sidebar?.colors.light};
    `}
  ${props =>
    props.secondary &&
    css`
    position: relative;
    &::after {
      content: "${props.secondary}";
      display: block;
      font-size: 9px;
      left: calc(50% - 30px);
      position: absolute;
      text-transform: uppercase;
      top: 15px;
    }
  `}
`;

export interface SidebarMenuProps extends Omit<SidebarMenuState, 'items'>, BoxProps {
  active?: boolean;
  children: ReactNode | ReactNodeArray;
  defaultItemKey?: string;
  menuKey: string;
  variant?: SidebarMenuVariant;
}

export const SidebarPanel = ({
  active,
  children,
  defaultItemKey,
  menuKey,
  onClick,
  primaryIcon,
  primaryText,
  reverse,
  secondaryIcon,
  secondaryText,
  variant,
  ...spread
}: SidebarMenuProps) => {
  const ref = useRef<any>();
  const { variant: sidebarVariant } = useSidebar();
  const collapsed = sidebarVariant === 'collapsed';
  const canPopup = useMemo(
    () =>
      ({
        accordion: false,
        'drop-above': true,
        'drop-below': true,
        overflow: collapsed,
      }[variant || 'accordion'] || false),
    [collapsed, variant]
  );
  const [popup, setOpen] = useState<any>(false);
  const expandAbove = useMemo<boolean>(
    () =>
      ({
        accordion: false,
        'drop-above': true,
        'drop-below': true,
        overflow: false,
      }[variant || 'accordion'] || false),
    [variant]
  );

  const {
    active: [activeMenuKey],
    setActive,
    theme,
  } = useSidebar();
  const handleClick = useCallback(
    ev => {
      if (typeof onClick === 'function') {
        return onClick(ev);
      }
      if (typeof active === 'boolean') {
        return;
      }
      if (['accordion', 'overflow', undefined].includes(variant)) {
        setActive([menuKey, defaultItemKey]);
      }
      if (canPopup) {
        setOpen(!popup);
      }
    },
    [active, canPopup, defaultItemKey, menuKey, onClick, popup, setActive, variant]
  );

  const isActive = typeof active === 'boolean' ? active : menuKey === activeMenuKey;

  const handleDropClose = useCallback(() => setOpen(false), []);

  const dropAlign = useMemo<any>(
    () =>
      ({
        accordion: {},
        'drop-above': { bottom: 'top', left: 'left' },
        'drop-below': { top: 'bottom', left: 'left' },
        overflow: { top: 'top', left: 'right' },
      }[variant || 'accordion'] || {}),
    [variant]
  );

  const SecondaryIcon = useMemo(() => {
    if (collapsed) {
      return null;
    }
    switch (typeof secondaryIcon) {
      case 'string':
        return <IconStyled>{secondaryIcon}</IconStyled>;
      case 'undefined':
        return (
          <IconStyled>
            {
              {
                accordion: isActive ? 'FormDown' : 'FormNext',
                'drop-above': isActive ? 'FormDown' : 'FormUp',
                'drop-below': isActive ? 'FormUp' : 'FormDown',
                'drop-out': popup ? 'FormPrevious' : 'FormNext',
                overflow: isActive ? 'FormDown' : popup ? 'FormPrevious' : 'FormNext',
              }[variant || 'accordion']
            }
          </IconStyled>
        );
      default:
        return secondaryIcon;
    }
  }, [isActive, collapsed, popup, secondaryIcon, variant]);

  return (
    <ContainerBoxStyled onClick={handleClick} ref={ref} reverse={expandAbove}>
      <BoxStyled active={isActive} full={true} direction="row" align="stretch" {...spread}>
        <IconStyled color={isActive ? 'light-1' : 'light-4'}>{primaryIcon}</IconStyled>
        {!collapsed && (
          <TextStyled highlight={isActive} secondary={secondaryText}>
            {primaryText}
          </TextStyled>
        )}
        {!collapsed && SecondaryIcon}
      </BoxStyled>
      {canPopup && popup && children && (
        <Drop
          align={dropAlign}
          onClickOutside={handleDropClose}
          onEsc={handleDropClose}
          plain={true}
          responsive={true}
          restrictFocus={true}
          target={ref.current}
        >
          <Box
            background={theme?.nav?.backgroundColor}
            hoverIndicator={{ opacity: 1 }}
            justify="stretch"
            overflow="hidden"
            pad={{ vertical: '16px' }}
            width={{ min: '200px' }}
            wrap={false}
          >
            {children}
          </Box>
        </Drop>
      )}
      {!collapsed && !expandAbove && children && (
        <Collapsible direction="vertical" open={isActive} role="tabpanel">
          {children}
        </Collapsible>
      )}
    </ContainerBoxStyled>
  );
};
export default SidebarPanel;
