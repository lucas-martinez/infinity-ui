import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Button, Layer } from '../../js/components';

const FullLayer = () => {
  const [showLayer, setShowLayer] = React.useState(false);

  return (
    <>
      <Box pad="small" fill background="dark-3" align="center" justify="center">
        <Button
          primary
          color="accent-3"
          label="Show"
          onClick={() => setShowLayer(true)}
        />
        {showLayer && (
          <Layer full animation="fadeIn">
            <Box fill background="light-4" align="center" justify="center">
              <Button
                primary
                label="Close"
                onClick={() => setShowLayer(false)}
              />
            </Box>
          </Layer>
        )}
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Layer', module).add('Full', () => <FullLayer />);
