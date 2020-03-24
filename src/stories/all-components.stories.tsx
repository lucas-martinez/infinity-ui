import { storiesOf } from '@storybook/react';
import React, { useContext, useState } from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { ChooseThemeContext } from '../components/ThemeQ';
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Calendar,
  Chart,
  CheckBox,
  Clock,
  DataTable,
  Distribution,
  FormField,
  Grid,
  Heading,
  MaskedInput,
  Menu,
  Meter,
  Paragraph,
  RadioButtonGroup,
  RangeInput,
  RangeSelector,
  Select,
  Stack,
  Tab,
  Tabs,
  Text,
  TextArea,
  TextInput,
  Video,
} from '../js/components';

const Node = ({ id, ...rest }) => (
  <Box
    id={id}
    basis="xxsmall"
    margin="small"
    pad="medium"
    round="small"
    background="light-4"
    {...rest}
  />
);

const daysInMonth = (month: number) => new Date(2019, month, 0).getDate();

const Components = () => {
  const [checkBox, setCheckBox] = useState<any>(true);
  const [radioButton, setRadioButton] = useState<any>('RadioButton 1');
  const [rangeSelector, setRangeSelector] = useState<any>([1, 2]);
  const [background] = useState<any>(undefined);
  const [tabIndex, setTabIndex] = useState<any>(0);
  const [value, setValue] = useState<any>('');
  const [date, setDate] = useState<any>('');
  const [rangeInputValue, setRangeInputValue] = useState<any>(24);
  const [textAreaValue, setTextAreaValue] = useState<any>('');
  const [textInputValue, setTextInputValue] = useState<any>('');
  const { theme, themeMode, setTheme, setThemeMode, themes } = useContext(
    ChooseThemeContext,
  );

  const getCurrentThemeKey = () => {
    const entries = Object.entries(themes);
    const filtered = entries.filter(([, val]) => val === theme);
    const keys = filtered.map(([key]) => key);
    const key = keys.length ? keys[0] : '';
    return key;
  };

  const themeName = getCurrentThemeKey();

  const content = [
    <Box key="type" align="start">
      <Heading margin={{ top: 'none' }}>Heading</Heading>
      <Paragraph>Paragraph</Paragraph>
      <Text>Text</Text>
      <Anchor href="">Anchor</Anchor>
      <Menu
        label="Menu"
        items={[{ label: 'One', onClick: () => {} }, { label: 'Two' }]}
      />
      <Button label="Button" onClick={() => {}} />
    </Box>,
    <Box key="input" gap="small">
      <Select
        placeholder="Select"
        options={['One', 'Two']}
        value={value}
        onChange={event => setValue(event.option)}
      />
      <CheckBox
        name="check"
        checked={checkBox}
        label="CheckBox"
        onChange={event => setCheckBox(event.target.checked)}
      />
      <CheckBox
        name="toggle"
        toggle
        checked={checkBox}
        label="CheckBox toggle"
        onChange={event => setCheckBox(event.target.checked)}
      />
      <RadioButtonGroup
        name="radio"
        options={['RadioButton 1', 'RadioButton 2']}
        value={radioButton}
        onChange={event => setRadioButton(event.target.value)}
      />
      <TextInput
        placeholder="TextInput"
        value={textInputValue}
        onChange={event => setTextInputValue(event.target.value)}
      />
      <TextArea
        placeholder="TextArea"
        value={textAreaValue}
        onChange={event => setTextAreaValue(event.target.value)}
      />
      <MaskedInput
        mask={[
          {
            length: [1, 2],
            options: Array.from({ length: 12 }, (v, k) => k + 1),
            regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
            placeholder: 'mm',
          },
          { fixed: '/' },
          {
            length: [1, 2],
            options: Array.from(
              {
                length: daysInMonth(parseInt(date.split('/')[0], 10)),
              },
              (v, k) => k + 1,
            ),
            regexp: /^[1-2][0-9]$|^3[0-1]$|^0?[1-9]$|^0$/,
            placeholder: 'dd',
          },
          { fixed: '/' },
          {
            length: 4,
            options: Array.from({ length: 100 }, (v, k) => 2019 - k),
            regexp: /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
            placeholder: 'yyyy',
          },
        ]}
        value={date}
        onChange={event => setDate(event.target.value)}
      />
      <RangeInput
        value={rangeInputValue}
        onChange={event => setRangeInputValue(event.target.value)}
      />
      <Stack>
        <Box direction="row" justify="between">
          {[0, 1, 2, 3].map(value => (
            <Box key={value} pad="small">
              <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
            </Box>
          ))}
        </Box>
        <RangeSelector
          direction="horizontal"
          invert={false}
          min={0}
          max={3}
          size="full"
          round="small"
          values={rangeSelector}
          onChange={values => setRangeSelector(values)}
        />
      </Stack>
      <FormField label="FormField">
        <TextInput placeholder="TextInput" />
      </FormField>
    </Box>,
    <Box key="time" gap="medium">
      <Calendar size="small" />
      <Clock type="digital" className="chromatic-ignore" />
      <Clock className="chromatic-ignore" />
    </Box>,
    <Box key="measure" gap="medium">
      <Chart
        type="bar"
        round
        size="small"
        values={[{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]}
      />
      <Meter
        type="bar"
        round
        size="small"
        background="light-3"
        values={[{ value: 30 }]}
      />
    </Box>,
    <Box key="visualize" gap="small">
      <Distribution
        basis="small"
        values={[
          { value: 50, color: 'light-3' },
          { value: 30, color: 'accent-1' },
          { value: 20, color: 'light-4' },
          { value: 10, color: 'light-3' },
          { value: 5, color: 'light-4' },
        ]}
      >
        {value => (
          <Box pad="xsmall" background={value.color} fill>
            <Text size="large">{value.value}</Text>
          </Box>
        )}
      </Distribution>
      <Stack>
        <Box>
          <Box direction="row">
            {[1, 2].map(id => (
              <Node key={id} id={id} />
            ))}
          </Box>
          <Box direction="row">
            {[3, 4].map(id => (
              <Node key={id} id={id} />
            ))}
          </Box>
        </Box>
        {/* <Diagram connections={[connection('1', '4')]} /> */}
      </Stack>
    </Box>,
    <Box key="dataTable" alignSelf="start">
      <DataTable
        columns={[
          { property: 'name', header: 'Name' },
          { property: 'color', header: 'Color' },
        ]}
        data={[
          { name: 'Alan', color: 'blue' },
          { name: 'Chris', color: 'purple' },
          { name: 'Eric', color: 'orange' },
        ]}
        sortable
      />
    </Box>,
    <Box key="accordion">
      <Accordion>
        <AccordionPanel label="Accordion Panel 1">
          <Box pad="small">
            <Text>Accordion panel 1 content</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Accordion Panel 2">
          <Box pad="small">
            <Text>Accordion panel 2 content</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>,
    <Box key="tabs">
      <Tabs activeIndex={tabIndex} onActive={index => setTabIndex(index)}>
        <Tab title="Tab 1">
          <Box pad="small">
            <Text>Tab 1 content</Text>
          </Box>
        </Tab>
        <Tab title="Tab 2">
          <Box pad="small">
            <Text>Tab 2 content</Text>
          </Box>
        </Tab>
      </Tabs>
    </Box>,
    <Box key="video" alignSelf="start">
      <Video>
        <source
          src="http://techslides.com/demos/sample-videos/small.webm"
          type="video/webm"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.ogv"
          type="video/ogg"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.mp4"
          type="video/mp4"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.3gp"
          type="video/3gp"
        />
      </Video>
    </Box>,
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1 1' }}>
        <Box fill pad="medium" background={background} overflow="auto">
          {/* {Grid.available ? ( */}
          {Grid ? (
            <Grid columns="small" gap="medium">
              {content}
            </Grid>
          ) : (
            <Box direction="row" wrap align="start" gap="large">
              {content}
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
};

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/All', module).add('All', () => (
    <Components />
  ));
}
