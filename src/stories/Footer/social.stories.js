import { storiesOf } from '@storybook/react';
import { Anchor, Box, Footer, Main, Text } from 'grommet/components';
import { FacebookOption, Grommet, Instagram, Twitter } from 'grommet-icons';
import React from 'react';


const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/"
      icon={<Instagram color="brand" />}
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="brand" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="brand" />}
    />
  </Box>
);

const Social = () => (
  <>
    <Main background="light-2" elevation="large" pad="medium" gap="large">
      <Text margin="small" size="xsmall">
        Main Content
      </Text>
      <Box flex />
    </Main>
    <Footer background="light-4" pad="small">
      <Box align="center" direction="row" gap="xsmall">
        <Grommet color="brand" size="medium" />
        <Text alignSelf="center" color="brand" size="small">
          Grommet
        </Text>
      </Box>
      <Media />
      <Text textAlign="center" size="xsmall">
        ©Copyright
      </Text>
    </Footer>
  </>
);

storiesOf('Grommet 2/Footer', module).add('Social', () => <Social />);
