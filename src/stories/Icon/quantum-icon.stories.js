import { storiesOf } from '@storybook/react';
import React from 'react';
import QuantumIcon from '../../components/IconQ/QuantumIcon';
import { Grid, Heading } from '../../js/components';
import { Box } from '../../js/nents/Box';
import icons from '../../themes/cobalt/icons';

export const grommetIcons = () => (
  <Box align="stretch" pad="small">
    <Grid columns={{ count: 4, size: 'auto' }} gap="small">>
    {Object.entries(icons).map(([name, def], index) => (
      <Box align="center" pad="small" key={`${name}-${index}`}>
        <Heading level={4}>{name}</Heading>
        {Object.entries(def).map(([size, url]) => (
          <QuantumIcon size={size}>{name}</QuantumIcon>
        ))}
      </Box>
    ))}
    </Grid>
  </Box>
);

storiesOf('Quantum/Icon', module)
  
  .add('quanum-ux', grommetIcons);
