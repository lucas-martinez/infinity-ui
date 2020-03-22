import { storiesOf } from '@storybook/react';
import { Box, List } from 'grommet/components';
import React from 'react';

import { data } from './data';

const SecondaryKeyList = () => (
  <>
    <Box align="center" pad="large">
      <List
        data={data.slice(0, 10)}
        primaryKey="entry"
        secondaryKey="location"
      />
    </Box>
  </>
);

storiesOf('Grommet 2/List', module).add('secondaryKey', () => <SecondaryKeyList />);
