import React from 'react';
import { Box, BoxProps } from '../Box';

const Main: React.FC<BoxProps> = ({ ...rest }) => (
  <Box as="main" fill="vertical" flex="grow" overflow="auto" {...rest} />
);

let MainDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  MainDoc = require('./doc').doc(Main);
}
const MainWrapper = MainDoc || Main;

export { MainWrapper as Main };

