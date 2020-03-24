import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, List } from '../../../../js';
import { grommet } from '../../../../js/themes';
import { data } from './data';

const SelectionList = () => {
  const [selected, setSelected] = React.useState<any>();

  return (
    <Grommet theme={grommet}>
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
    </Grommet>
  );
};

storiesOf('List', module).add('selection', () => <SelectionList />);
