import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import React from 'react';
import { Box, Grommet, Tab, Tabs } from '../../../../js';
import { grommet } from '../../../../js/themes';

const ControlledTabs = () => {
  const [index, setIndex] = React.useState<any>();

  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <Grommet theme={grommet}>
      <Tabs activeIndex={index} onActive={onActive}>
        <Tab title="Tab 1">
          <Box margin="small" pad="large" align="center" background="accent-1">
            <Attraction size="xlarge" />
          </Box>
        </Tab>
        <Tab title="Tab 2">
          <Box margin="small" pad="large" align="center" background="accent-2">
            <TreeOption size="xlarge" />
          </Box>
        </Tab>
        <Tab title="Tab 3">
          <Box margin="small" pad="large" align="center" background="accent-3">
            <Car size="xlarge" />
          </Box>
        </Tab>
      </Tabs>
    </Grommet>
  );
};

storiesOf('Tabs', module).add('Controlled', () => <ControlledTabs />);
