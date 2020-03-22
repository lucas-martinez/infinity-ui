import React from 'react';
import ReactDOM from 'react-dom';
import { SidebarThemeProvider } from './SidebarTheme';
import { Grommet } from 'js/components/Grommet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Grommet ><SidebarThemeProvider /></Grommet>, div);
  ReactDOM.unmountComponentAtNode(div);
});
