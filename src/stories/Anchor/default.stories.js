import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'grommet/components';
import React from 'react';


const Default = () => {
  return (
    <>
      <Box align="center" pad="large">
        <Anchor href="#">Link</Anchor>
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Anchor', module).add('Default', () => <Default />);
