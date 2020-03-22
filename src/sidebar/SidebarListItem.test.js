import { Grommet } from 'js/components/Grommet';
import React from 'react';
import ReactDOM from 'react-dom';
import SidebarListItem from './SidebarListItem';
import SidebarProvider from './SidebarProvider';
import { SidebarThemeProvider } from './SidebarTheme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Grommet>
      <SidebarThemeProvider>
        <SidebarProvider>
          <SidebarListItem primaryText="Hello" />
        </SidebarProvider>
      </SidebarThemeProvider>
    </Grommet>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
