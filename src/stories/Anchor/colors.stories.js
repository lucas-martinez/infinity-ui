import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'grommet/components';
import { Add } from 'grommet-icons';
import React from 'react';



const Colors = () => {
  return (
    <>
      <Box pad="medium" gap="medium">
        <Anchor icon={<Add />} href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor label="Add" href="#" />
      </Box>
      <Box background="dark-1" pad="medium" gap="medium">
        <Anchor icon={<Add color="accent-1" />} href="#" />
        <Anchor icon={<Add />} color="accent-2" label="Add" href="#" />
        <Anchor icon={<Add />} color="accent-3"  label="Add" href="#" />
        <Anchor label="Add" href="#" />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Anchor', module).add('Colors', () => <Colors />);
