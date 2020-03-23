import PropTypes from 'prop-types';
import React from 'react';
import { ThemeContext } from 'styled-components';
import { deepMerge } from '../../utils';

export type ThemeValue = Record<string, any>;

export interface ThemeContextI extends React.Context<ThemeValue> {
  Extend: React.FC<{ value: ThemeValue }>;
}

const Theme: any = ThemeContext;

Theme.Extend = ({ children, value }) => (
  <ThemeContext.Consumer>
    {theme => (
      <ThemeContext.Provider value={deepMerge(theme, value)}>
        {children}
      </ThemeContext.Provider>
    )}
  </ThemeContext.Consumer>
);

Theme.Extend.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({}).isRequired,
};

export { ThemeContext };

