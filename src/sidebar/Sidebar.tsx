import { FormNext, FormPrevious } from 'grommet-icons';
import { Box, BoxProps } from '../js/components/Box';
import { Button } from '../js/components/Button';
import React, { ReactNode, ReactNodeArray } from 'react';
import styled, { css } from 'styled-components';
import SidebarTheme from './SidebarTheme';
import useSidebar from './useSidebar';

type AsideProps = { collapsed: boolean; reverse: boolean; width?: number; };
const Aside = styled<any & AsideProps>(Box)`
  ${props => css`
    background-color: ${props.theme?.sidebar?.nav?.backgroundColor};
  `}

  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  overflow: visible;
  min-width: 64px;
  ${props =>
    !props.collapsed &&
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${props =>
    props.collapsed &&
    css`
      width: 64px;
    `}
  transition: 0.2s cubic-bezier(0.49, 1, 0.38, 0.98);
  ${props => css`
    flex-direction: ${!props.reverse ? 'row' : 'row-reverse'};
  `}
  width: auto;
  
  /* disable text selection */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Opera and Firefox */
`;

const SidebarContainer = styled.div`
  display: flex;
  align-items: stretch;
  align-content: stretch;
  flex-direction: column;
  flex-grow: 0;
  justify-content: stretch;
`;

const SidebarSplitter = styled.div`
  flex-grow: 0;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ew-resize;

  height: 100%;
  width: 1px;
  overflow: visible;
`;

export const SidebarMain = styled.div`
  align-self: stretch;
  flex-grow: 1;
  display: block;
  height: auto;
  width: 100%;
  overflow: hidden;
`;

const RoundButton = styled<any & { spec: SidebarTheme }>(Button)`
  ${props => css`
    background-color: ${props.theme?.sidebar?.nav?.menu?.backgroundColor};
    border: solid 1px ${props.theme?.sidebar?.button?.circular?.borderColor};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 50%;
  border-radius: 16px;
  height: 32px;
  min-width: 32px;
`;

const iconProps = {
  color: 'light-1',
  size: 'medium',
};

export interface SidebarProps extends BoxProps {
  children?: ReactNode | ReactNodeArray;
}

const Sidebar = ({ basis, children, ...spread }: SidebarProps) => {
  const { variant, reverse, theme, toggleSidebar } = useSidebar();
  const collapsed = variant === 'collapsed';

  return (
    <Aside
      basis={basis || 'medium'}
      collapsed={collapsed}
      reverse={reverse}
      flex={false}
      spec={theme}
      tag={'aside'}
      {...spread}
    >
      <SidebarContainer>
          {children}
      </SidebarContainer>
      <SidebarSplitter>
        <div style={{ position: 'relative' }}>
          <div style={{ left: -16, position: 'absolute' }}>
            <RoundButton
              a11yTitle="Toggle Application Sidebar"
              icon={collapsed ? <FormNext {...iconProps} /> : <FormPrevious {...iconProps} />}
              onClick={toggleSidebar}
              plain={true}
              spec={theme}
            />
          </div>
        </div>
      </SidebarSplitter>
    </Aside>
  );
};

export default Sidebar;
