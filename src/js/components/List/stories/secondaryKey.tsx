import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, List } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { data } from './data';

const SecondaryKeyList = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <List
        data={data.slice(0, 10)}
        primaryKey="entry"
        secondaryKey="location"
      />
    </Box>
  </Grommet>
);

storiesOf('List', module).add('secondaryKey', () => <SecondaryKeyList />);