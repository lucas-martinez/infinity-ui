import { storiesOf } from '@storybook/react';
import { Box, Button, grommet, Grommet } from 'js/components';
import { deepMerge } from 'js/utils';
import React from 'react';


const customButtonColor = deepMerge(grommet, {
  button: {
    color: {
      light: 'white',
      dark: 'white',
    },
  },
});

const Colored = props => (
  <Grommet theme={customButtonColor}>
    <Box align="center" pad="large" gap="small">
      <Button primary label="Submit" onClick={() => {}} />
      <Button
        primary
        color="dark-1"
        label="custom theme text colored"
        onClick={() => {}}
      />
      <Button
        primary
        color="dark-1"
        label="dark-1"
        onClick={() => {}}
        {...props}
      />
      <Button
        primary
        color="#111111"
        label="#111111"
        onClick={() => {}}
        {...props}
      />
      <Button primary color="#777" label="#777" onClick={() => {}} {...props} />
      <Button
        plain
        color="red"
        label="plain red"
        onClick={() => {}}
        {...props}
      />
      <Button
        plain
        label="plain inherit"
        onClick={() => {}}
        {...props}
      />
    </Box>
  </Grommet>
);

storiesOf('Grommet 2/Button', module).add('Colored', () => <Colored />);
