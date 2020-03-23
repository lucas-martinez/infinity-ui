import { Grommet } from 'js/components/Grommet';
import React from 'react';
import ReactDOM from 'react-dom';
import SidebarProvider from './SidebarProvider';
import { SidebarThemeProvider } from './SidebarTheme';
import SidebarView from './SidebarView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Grommet>
      <SidebarThemeProvider>
        <SidebarProvider>
          <SidebarView />
        </SidebarProvider>
      </SidebarThemeProvider>
    </Grommet>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
