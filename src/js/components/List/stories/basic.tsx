import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, List } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { locations } from './data';

const BasicList = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </Grommet>
);

storiesOf('List', module).add('basic', () => <BasicList />);
