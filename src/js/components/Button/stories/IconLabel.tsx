import { storiesOf } from '@storybook/react';
import { Add } from 'grommet-icons';
import React from 'react';
import { Box, Button, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const IconLabel = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Box round="full" overflow="hidden" background="neutral-1">
        <Button icon={<Add />} hoverIndicator onClick={() => {}} />
      </Box>
      <Box align="center" pad="large" gap="small">
        <Button icon={<Add />} label="Add" onClick={() => {}} primary />
        <Button icon={<Add />} label="Add" onClick={() => {}} />
        <Button icon={<Add />} label="Add" gap="xlarge" onClick={() => {}} />
        <Button
          icon={<Add />}
          label="500px gap"
          gap="500px"
          onClick={() => {}}
        />
      </Box>
    </Box>
  </Grommet>
);

storiesOf('Button', module).add('Icon Label', () => <IconLabel />);