import React from 'react';
import ReactDOM from 'react-dom';
import SidebarScrollbar from './SidebarScrollbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarScrollbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
