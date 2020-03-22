import { actions } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box } from '../js/components/Box';
import Sidebar from './Sidebar';
import SidebarListDivider from './SidebarListDivider';
import SidebarListItem from './SidebarListItem';
import SidebarMenu from './SidebarMenu';
import SidebarProvider from './SidebarProvider';
import { SidebarThemeProvider } from './SidebarTheme';

storiesOf('UX/Sidebar', module)
  .add('Simple Sidebar with menus (not selectable)', () => {
    return (
      <SidebarThemeProvider>
        <SidebarProvider>
          <Sidebar>
            <SidebarMenu menuKey="A" primaryIcon="Hpi" primaryText="One to Four">
              <SidebarListItem menuKey="A" itemKey="1" primaryText="One" secondaryIcon="Close" secondaryOnClick={actions('One')} />
              <SidebarListItem menuKey="A" itemKey="2" primaryText="Two" secondaryIcon="Close" secondaryOnClick={actions('Two')} />
              <SidebarListItem menuKey="A" itemKey="3" primaryText="Three" secondaryIcon="Close" secondaryOnClick={actions('Three')} />
              <SidebarListItem menuKey="A" itemKey="4" primaryText="Four" secondaryIcon="Close" secondaryOnClick={actions('Four')} />
            </SidebarMenu>
            <SidebarMenu menuKey="B" primaryIcon="Hpi" primaryText="Five to Ten">
              <SidebarListItem menuKey="B" itemKey="5" primaryText="Five" secondaryIcon="Close" secondaryOnClick={actions('Five')} />
              <SidebarListItem menuKey="B" itemKey="6" primaryText="Six" secondaryIcon="Close" secondaryOnClick={actions('Six')} />
              <SidebarListItem menuKey="B" itemKey="7" primaryText="Seven" secondaryIcon="Close" secondaryOnClick={actions('Seven')} />
              <SidebarListItem menuKey="B" itemKey="8" primaryText="Eight" secondaryIcon="Close" secondaryOnClick={actions('Eight')} />
              <SidebarListItem menuKey="B" itemKey="9" primaryText="Nine" secondaryIcon="Close" secondaryOnClick={actions('Nine')} />
              <SidebarListItem menuKey="B" itemKey="10" primaryText="Ten" secondaryIcon="Close" secondaryOnClick={actions('Ten')} />
            </SidebarMenu>
            <SidebarMenu menuKey="C" primaryIcon="Hpi" primaryText="Eleven to Twenty">
              <SidebarListItem menuKey="C" itemKey="11" primaryText="Eleven" secondaryIcon="Close" secondaryOnClick={actions('Eleven')} />
              <SidebarListItem menuKey="C" itemKey="12" primaryText="Twelve" secondaryIcon="Close" secondaryOnClick={actions('Twelve')} />
              <SidebarListItem menuKey="C" itemKey="13" primaryText="Thirteen" secondaryIcon="Close" secondaryOnClick={actions('Thirteen')} />
              <SidebarListItem menuKey="C" itemKey="14" primaryText="Fourteen" secondaryIcon="Close" secondaryOnClick={actions('Fourteen')} />
              <SidebarListItem menuKey="C" itemKey="15" primaryText="Fifteen" secondaryIcon="Close" secondaryOnClick={actions('Fifteen')} />
              <SidebarListDivider />
              <SidebarListItem menuKey="D" itemKey="16" primaryText="Sixteen" secondaryIcon="Close" secondaryOnClick={actions('Sixteen')} />
              <SidebarListItem menuKey="D" itemKey="17" primaryText="Seventeen" secondaryIcon="Close" secondaryOnClick={actions('Seventeen')} />
              <SidebarListItem menuKey="D" itemKey="18" primaryText="Eighteen" secondaryIcon="Close" secondaryOnClick={actions('Eighteen')} />
              <SidebarListItem menuKey="D" itemKey="19" primaryText="Nineteen" secondaryIcon="Close" secondaryOnClick={actions('Nineteen')} />
              <SidebarListItem menuKey="D" itemKey="20" primaryText="Twenty" secondaryIcon="Close" secondaryOnClick={actions('Twenty')} />
            </SidebarMenu>
            <Box flex="grow" />
            <SidebarMenu menuKey="E" primaryIcon="Hpi" primaryText="Twenty Four to Twenty One" variant="drop-above">
              <SidebarListItem menuKey="E" itemKey="24" primaryIcon="Norton" primaryOnClick={actions('Twenty Four')} primaryText="Twenty Four" />
              <SidebarListItem menuKey="E" itemKey="23" primaryIcon="Norton" primaryOnClick={actions('Twenty Three')} primaryText="Twenty Three" />
              <SidebarListItem menuKey="E" itemKey="22" primaryIcon="Norton" primaryOnClick={actions('Twenty Two')} primaryText="Twenty Two" />
              <SidebarListItem menuKey="E" itemKey="21" primaryIcon="Norton" primaryOnClick={actions('Twenty One')} primaryText="Twenty One" />
            </SidebarMenu>
          </Sidebar>
        </SidebarProvider>
      </SidebarThemeProvider>
    )
  });
