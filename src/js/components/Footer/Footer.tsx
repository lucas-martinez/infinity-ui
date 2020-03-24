import React from 'react';
import { Box, BoxProps } from '../Box';

const Footer = ({ ...rest }: BoxProps) => (
  <Box
    as="footer"
    align="center"
    direction="row"
    flex={false}
    gap="medium"
    justify="between"
    {...rest}
  />
);

let FooterDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  FooterDoc = require('./doc').doc(Footer);
}

const FooterWrapper = FooterDoc || Footer;

export { FooterWrapper as Footer };
