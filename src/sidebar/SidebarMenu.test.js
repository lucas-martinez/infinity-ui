import { Grommet } from 'js/components/Grommet';
import React from 'react';
import ReactDOM from 'react-dom';
import SidebarMenu from './SidebarMenu';
import SidebarProvider from './SidebarProvider';
import { SidebarThemeProvider } from './SidebarTheme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Grommet>
      <SidebarThemeProvider>
        <SidebarProvider>
          <SidebarMenu />
        </SidebarProvider>
      </SidebarThemeProvider>
    </Grommet>, div);
  ReactDOM.unmountComponentAtNode(div);
});
