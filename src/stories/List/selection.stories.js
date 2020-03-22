import { storiesOf } from '@storybook/react';
import { Box, List } from 'grommet/components';
import React from 'react';

import { data } from './data';

const SelectionList = () => {
  const [selected, setSelected] = React.useState();

  return (
    <>
      <Box align="center" pad="large" gap="large">
        <List
          data={data.slice(0, 10)}
          itemProps={
            selected >= 0 ? { [selected]: { background: 'brand' } } : undefined
          }
          onClickItem={event =>
            setSelected(selected === event.index ? undefined : event.index)
          }
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/List', module).add('selection', () => <SelectionList />);
