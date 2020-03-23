import { storiesOf } from '@storybook/react';
import { Box, List } from 'grommet/components';
import React from 'react';

import { data } from './data';

const OnClickItemList = () => {
  const [clicked, setClicked] = React.useState();
  return (
    <>
      <Box align="center" pad="large" gap="large">
        <List
          data={data.slice(0, 10)}
          onClickItem={event => setClicked(event.item)}
        />

        {clicked && JSON.stringify(clicked, null, 2)}
      </Box>
    </>
  );
};

storiesOf('Grommet 2/List', module).add('onClickItem', () => <OnClickItemList />);
