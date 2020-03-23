import { storiesOf } from '@storybook/react';
import { Box, Chart } from 'grommet/components';
import React from 'react';


const BarChart = () => (
  <>
    <Box align="center" pad="large">
      <Chart
        type="bar"
        values={[
          [10, 20],
          [20, 30],
          [30, 15],
        ]}
      />
    </Box>
  </>
);

const LineChart = () => (
  <>
    <Box align="center" pad="large">
      <Chart type="line" values={[20, 30, 15]} />
    </Box>
  </>
);

const AreaChart = () => (
  <>
    <Box align="center" pad="large">
      <Chart
        type="area"
        values={[{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]}
      />
    </Box>
  </>
);

const PointChart = () => (
  <>
    <Box align="center" pad="large">
      <Chart
        type="point"
        values={[
          [10, 20],
          [20, 30],
          [30, 15],
        ]}
      />
      <Chart
        type="point"
        values={[
          [10, 20],
          [20, 30],
          [30, 15],
        ]}
        round
      />
    </Box>
  </>
);

storiesOf('Grommet 2/Chart', module)
  
  .add('Bar', () => <BarChart />)
  .add('Line', () => <LineChart />)
  .add('Area', () => <AreaChart />)
  .add('Point', () => <PointChart />);
