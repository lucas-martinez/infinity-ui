import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  Anchor,
  Box,
  Grommet,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
} from '../../../../js';
import { grommet } from '../../../../js/themes';

const CollapsableNav = () => (
  <Grommet theme={grommet}>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        Resize the page to collapse the Nav into a Menu
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Click me"
              items={[
                { label: 'This is', onClick: () => {} },
                { label: 'The Menu', onClick: () => {} },
                { label: 'Component', onClick: () => {} },
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="#" label="This is" />
              <Anchor href="#" label="The Nav" />
              <Anchor href="#" label="Component" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
);

storiesOf('ResponsiveContext', module).add('Collapsable Nav', () => (
  <CollapsableNav />
));
