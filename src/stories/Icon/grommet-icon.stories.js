import { storiesOf } from '@storybook/react';
import React from 'react';
import GrommetIcon from '../../components/Icon/GrommetIcon';
import { Grid, Heading } from '../../js/components';
import { Box } from '../../js/nents/Box';
import iconNames from './iconNames';

storiesOf('Grommet 2/Icon', module)
  .add('V2 Icons', () => (
    <Box align="stretch" pad="small">
      <Grid columns={{ count: 4, size: 'auto' }} gap="small">
        {iconNames.map(name => (
          <Box align="center" pad="small" key={`${name}-${index}`}>
            <Heading level={4}>{name}</Heading>
            <GrommetIcon size="xlarge" >{name}</GrommetIcon>
          </Box>
        ))}
      </Grid>
    </Box>
  ));