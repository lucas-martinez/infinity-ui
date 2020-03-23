import { storiesOf } from '@storybook/react';
import { More } from 'grommet-icons';
import React from 'react';
import { Box, Grommet, List, Menu } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { data } from './data';

const ActionList = () => (
  <Grommet theme={grommet}>
    <Box pad="large">
      <List
        data={data.slice(0, 10)}
        pad={{ left: 'small', right: 'none' }}
        action={() => (
          <Menu icon={<More />} hoverIndicator items={[{ label: 'one' }]} />
        )}
      />
    </Box>
  </Grommet>
);

storiesOf('List', module).add('action', () => <ActionList />);
