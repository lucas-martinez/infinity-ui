import PropTypes from 'prop-types';
import React, { ReactNodeArray, ReactNode } from 'react';
import { ThemeContext } from 'styled-components';
import { deepMerge } from '../../utils';

interface ThemeExtendProps {
  children: ReactNode | ReactNodeArray;
  value: any;
}

const ThemeExtend = ({ children, value }: ThemeExtendProps) => (
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
