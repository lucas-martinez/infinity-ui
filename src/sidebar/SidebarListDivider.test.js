import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from '../js/components/Grommet';
import SidebarListDivider from './SidebarListDivider';
import { SidebarThemeProvider } from './SidebarTheme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Grommet>
      <SidebarThemeProvider>
        <SidebarListDivider />
      </SidebarThemeProvider>
    </Grommet>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
