import { storiesOf } from '@storybook/react';
import React from 'react';
import { Anchor, Box, Grommet, Header, Nav } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { Avatar } from '../../Header/stories/Simple';

const items = [
  { label: 'HTML', href: '#' },
  { label: 'JS', href: '#' },
  { label: 'CSS', href: '#' },
  { label: 'REACT', href: '#' },
];

const OnHeader = () => (
  <Grommet theme={grommet}>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Avatar />
        <Anchor color="white" href="https://github.com/ShimiSun">
          ShimiSun
        </Anchor>
      </Box>
      <Nav direction="row">
        {items.map(item => (
          <Anchor href={item.href} label={item.label} key={item.label} />
        ))}
      </Nav>
    </Header>
  </Grommet>
);

storiesOf('Nav', module).add('On Header', () => <OnHeader />);
