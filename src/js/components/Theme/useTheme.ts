import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeType } from '../../themes';

const useTheme = () => useContext<ThemeType>(ThemeContext);

export default useTheme;
