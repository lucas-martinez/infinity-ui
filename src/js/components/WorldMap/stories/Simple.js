import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grommet, WorldMap } from 'js';
import { grommet } from 'js/themes';

const SimpleWorldMap = () => {
  const [places, setPlaces] = React.useState();

  const onSelectPlace = place => {
    setPlaces([{ color: 'accent-1', location: place }]);
  };

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <WorldMap onSelectPlace={onSelectPlace} places={places} />
      </Box>
    </Grommet>
  );
};

storiesOf('WorldMap', module).add('Simple', () => <SimpleWorldMap />);
