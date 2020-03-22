import { storiesOf } from '@storybook/react';
import { Box, List } from 'grommet/components';
import React from 'react';

import { locations } from './data';


const BasicList = () => (
  <>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </>
);

storiesOf('Grommet 2/List', module).add('basic', () => <BasicList />);
