import { storiesOf } from '@storybook/react';
import { Box, Button } from 'grommet/components';
import { Add } from 'grommet-icons';
import React from 'react';


const MultipleButton = () => (
  <>
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
  </>
);

storiesOf('Grommet 2/Button', module).add('Multiple', () => <MultipleButton />);
