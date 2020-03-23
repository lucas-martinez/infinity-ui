import { storiesOf } from '@storybook/react';
import { Add } from 'grommet-icons';
import React from 'react';
import { Box, Button, Layer, Text } from '../../js/components';

const CornerLayer = () => {
  const [open, setOpen] = React.useState();

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  return (
    <>
      <Box fill align="center" justify="center">
        <Button
          icon={<Add color="brand" />}
          label={
            <Text>
              <strong>Add Corner Layer</strong>
            </Text>
          }
          onClick={onOpen}
          plain
        />
      </Box>
      {open && (
        <Layer position="top-right" onClickOutside={onClose}>
          <Box height="small" overflow="auto">
            <Box pad="xlarge">Corner top-right position</Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

storiesOf('Grommet 2/Layer', module).add('Corner', () => <CornerLayer />);
