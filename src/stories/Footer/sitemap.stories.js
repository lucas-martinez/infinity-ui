import { storiesOf } from '@storybook/react';
import { Anchor, Box, Footer, Main, Text } from 'grommet/components';
import { Grommet } from 'grommet-icons';
import React from 'react';

import { threeColumns as data } from './data';

const FooterAnchor = ({ ...rest }) => (
  <Anchor href="/" size="small" color="white" {...rest} />
);

const FooterContent = () => {
  return data.map(item => (
    <Box gap="medium" key={item[0]}>
      <Text weight="bold" size="small">
        {item[0]}
      </Text>
      <Box>
        {[1, 2, 3].map(i => (
          <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
        ))}
      </Box>
    </Box>
  ));
};

const Sitemap = () => {
  return (
    <>
      <Main
        background="light-4"
        elevation="large"
        pad="large"
        gap="large"
        border
      >
        <Text margin="small" size="xsmall">
          Main Content
        </Text>
        <Box flex />
      </Main>
      <Footer background="dark-1" pad="large">
        <Box direction="row-responsive" gap="xsmall">
          <Box align="center" gap="small">
            <Grommet color="brand" size="large" />
            <Text alignSelf="center" color="brand" weight="bold">
              grommet.io
            </Text>
          </Box>
        </Box>
        <FooterContent />
      </Footer>
    </>
  );
};

storiesOf('Grommet 2/Footer', module).add('Sitemap', () => <Sitemap />);
