import PropTypes from 'prop-types';
import React from 'react';
import { ThemeContext } from 'styled-components';
import { deepMerge } from '../../utils';

const ThemeExtend = ({ children, value }) => (
  <ThemeContext.Consumer>
    {theme => (
      <ThemeContext.Provider value={deepMerge(theme, value)}>
        {children}
      </ThemeContext.Provider>
    )}
  </ThemeContext.Consumer>
);

ThemeExtend.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({}).isRequired,
};

export { ThemeExtend };