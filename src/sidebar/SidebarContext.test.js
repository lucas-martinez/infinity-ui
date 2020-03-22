import React from 'react';
import ReactDOM from 'react-dom';
import SidebarContext from './SidebarContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarContext.Provider value={{ }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
