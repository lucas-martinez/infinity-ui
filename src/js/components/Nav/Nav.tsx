import React from 'react';
import { Box, BoxProps } from '../Box';

const Nav: React.FC<BoxProps> = ({ ...rest }) => (
  <Box as="nav" flex={false} gap="medium" {...rest} />
);

let NavDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  NavDoc = require('./doc').doc(Nav);
}
const NavWrapper = NavDoc || Nav;

export { NavWrapper as Nav };

