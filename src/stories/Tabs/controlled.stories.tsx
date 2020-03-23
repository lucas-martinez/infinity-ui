import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Tab, Tabs } from '../../js/components';


const ControlledTabs = () => {
  const [index, setIndex] = React.useState<number>();

  const onActive = (nextIndex: number) => setIndex(nextIndex);

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

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Tabs', module).add('Controlled', () => (
    <ControlledTabs />
  ));
}
