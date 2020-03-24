import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Box, Grommet, Tab, Tabs } from '../../../../../js';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { grommet } from '../../../../../js/themes';

const ControlledTabs = () => {
  const [index, setIndex] = React.useState<any>(0);

  const onActive = (nextIndex: number) => setIndex(nextIndex);

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

if (!isChromatic()) {
  storiesOf('TypeScript/Tabs', module).add('Controlled', () => (
    <ControlledTabs />
  ));
}
