import { storiesOf } from '@storybook/react';
import { Box, List, Menu } from 'grommet/components';
import { More } from 'grommet-icons';
import React from 'react';

import { data } from './data';


const ActionList = () => (
  <>
    <Box align="center" pad="large">
      <List
        data={data.slice(0, 10)}
        pad={{ left: 'small', right: 'none' }}
        action={() => (
          <Menu icon={<More />} hoverIndicator items={[{ label: 'one' }]} />
        )}
      />
    </Box>
  </>
);

storiesOf('Grommet 2/List', module).add('action', () => <ActionList />);
