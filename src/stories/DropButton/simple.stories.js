import { storiesOf } from '@storybook/react';
import { Box, Button, DropButton, Grommet, Heading, Text } from 'js/components';
import { Close } from 'grommet-icons';
import { grommet } from 'js/themes';
import PropTypes from 'prop-types';
import React from 'react';


const DropContent = ({ onClose }) => (
  <Box pad="small">
    <Box direction="row" justify="between" align="center">
      <Heading level={3} margin="small">
        Heading
      </Heading>
      <Button icon={<Close />} onClick={onClose} />
    </Box>
    <Text>Content</Text>
  </Box>
);

DropContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const SimpleDropButton = () => {
  const [open, setOpen] = React.useState();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box align="center" pad="large">
        <DropButton
          label="Open"
          open={open}
          onOpen={onOpen}
          onClose={onClose}
          dropContent={<DropContent onClose={onClose} />}
          dropProps={{ align: { top: 'bottom' } }}
        />
      </Box>
    </>
  );
};

storiesOf('Grommet 2/DropButton', module).add('Simple', () => <SimpleDropButton />);
