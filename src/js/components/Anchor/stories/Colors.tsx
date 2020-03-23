import { storiesOf } from '@storybook/react';
import { Add } from 'grommet-icons';
import React from 'react';
import { Anchor, Box, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const Colors = () => {
  return (
    <Grommet theme={grommet}>
      <Box pad="medium" gap="medium">
        <Anchor icon={<Add />} href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor label="Add" href="#" />
      </Box>
      <Box background="dark-1" pad="medium" gap="medium">
        <Anchor icon={<Add />} href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor label="Add" href="#" />
      </Box>
    </Grommet>
  );
};

storiesOf('Anchor', module).add('Colors', () => <Colors />);