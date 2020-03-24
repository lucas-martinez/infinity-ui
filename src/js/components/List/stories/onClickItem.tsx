import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, List } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { data } from './data';

const OnClickItemList = () => {
  const [clicked, setClicked] = React.useState<any>();
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large" gap="large">
        <List
          data={data.slice(0, 10)}
          onClickItem={event => setClicked(event.item)}
        />

        {clicked && JSON.stringify(clicked, null, 2)}
      </Box>
    </Grommet>
  );
};

storiesOf('List', module).add('onClickItem', () => <OnClickItemList />);
