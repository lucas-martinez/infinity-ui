import { storiesOf } from '@storybook/react';
import { Box, WorldMap } from 'grommet/components';
import React from 'react';


const SimpleWorldMap = () => {
  const [places, setPlaces] = React.useState();

  const onSelectPlace = place => {
    setPlaces([{ color: 'accent-1', location: place }]);
  };

  return (
    <Box align="center" pad="large">
      <WorldMap onSelectPlace={onSelectPlace} places={places} />
    </Box>
  );
};

storiesOf('Grommet 2/WorldMap', module).add('Simple', () => <SimpleWorldMap />);
