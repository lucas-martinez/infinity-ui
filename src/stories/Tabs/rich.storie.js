import { storiesOf } from '@storybook/react';
import { CircleInformation, Currency } from 'grommet-icons';
import { Box, Text } from 'js/components';
import TextInput from 'js/nents/TextInput';
import FormField from 'js/nents/FormField';
import Tab from 'js/nents/Tab';
import Tabs from 'js/nents/Tabs';
import PropTypes from 'prop-types';
import React from 'react';


const RichTabs = () => (
  <>
    <Tabs>
      <Tab
        title={
          <RichTabTitle
            icon={<CircleInformation color="accent-2" />}
            label="Personal Data"
          />
        }
      >
        <FormField label="Name">
          <TextInput placeholder="Enter your name..." />
        </FormField>
      </Tab>
      <Tab
        title={
          <RichTabTitle icon={<Currency color="neutral-2" />} label="Payment" />
        }
      >
        <FormField label="Card Number">
          <TextInput placeholder="Enter your card number..." />
        </FormField>
      </Tab>
    </Tabs>
  </>
);

const RichTabTitle = ({ icon, label }) => (
  <Box direction="row" align="center" gap="xsmall" margin="xsmall">
    {icon}
    <Text size="small">
      <strong>{label}</strong>
    </Text>
  </Box>
);

RichTabTitle.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

storiesOf('Grommet 2/Tabs', module).add('Rich', () => <RichTabs />);

export { RichTabTitle };

