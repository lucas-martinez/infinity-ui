import { storiesOf } from '@storybook/react';
import { Box } from 'js/components';
import Tab from 'js/nents/Tab';
import Tabs from 'js/nents/Tabs';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import React from 'react';


const ControlledTabs = () => {
  const [index, setIndex] = React.useState();

  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <>
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
    </>
  );
};

storiesOf('Grommet 2/Tabs', module).add('Controlled', () => <ControlledTabs />);
