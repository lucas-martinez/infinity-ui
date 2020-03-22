import React from 'react';
import ReactDOM from 'react-dom';
import SidebarProvider from './SidebarProvider';
import { SidebarThemeProvider } from './SidebarTheme';
import { Grommet } from 'js/components/Grommet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Grommet>
      <SidebarThemeProvider>
        <SidebarProvider />
      </SidebarThemeProvider>
    </Grommet>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
