import React from 'react';
import { Box, BoxProps } from '../Box';

const Header: React.FC<BoxProps> = ({ ...rest }) => (
  <Box
    align="center"
    as="header"
    direction="row"
    flex={false}
    justify="between"
    gap="medium"
    {...rest}
  />
);

let HeaderDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  HeaderDoc = require('./doc').doc(Header);
}
const HeaderWrapper = HeaderDoc || Header;

export { HeaderWrapper as Header };
