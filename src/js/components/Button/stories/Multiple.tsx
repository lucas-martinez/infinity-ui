import { storiesOf } from '@storybook/react';
import { Add } from 'grommet-icons';
import React from 'react';
import { Box, Button, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const MultipleButton = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Box direction="row" align="center" gap="small" pad="xsmall">
        <Button label="Cancel" onClick={() => {}} />
        <Button
          color="dark-1"
          primary
          icon={<Add color="accent-1" />}
          label="Add"
          onClick={() => {}}
        />
      </Box>
      <Box direction="row" align="center" gap="small" pad="xsmall">
        <Button label="Cancel" onClick={() => {}} />
        <Button
          color="dark-1"
          primary
          icon={<Add />}
          label="Add"
          onClick={() => {}}
        />
      </Box>
      <Box direction="row" align="center" gap="small" pad="xsmall">
        <Button label="Cancel" onClick={() => {}} />
        <Button primary icon={<Add />} label="Add" onClick={() => {}} />
      </Box>
      <Box direction="row" align="center" gap="small" pad="xsmall">
        <Button label="Cancel" onClick={() => {}} />
        <Button
          color="light-2"
          primary
          icon={<Add />}
          label="Add"
          onClick={() => {}}
        />
      </Box>
    </Box>
  </Grommet>
);

storiesOf('Button', module).add('Multiple', () => <MultipleButton />);
