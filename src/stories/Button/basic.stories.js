import { storiesOf } from '@storybook/react';
import { Box, Button, grommet, Grommet } from 'grommet/components';
import React from 'react';


const BasicButtons = props => (
  <>
    <Box align="center" pad="medium">
      <Button label="Default" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button label="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button disabled label="Disabled" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button primary label="Primary" onClick={() => {}} {...props} />
    </Box>
  </>
);

storiesOf('Grommet 2/Button', module).add('Basic', () => <BasicButtons />);
