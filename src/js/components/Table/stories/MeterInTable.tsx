/* eslint-disable react/no-array-index-key */
import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  Box,
  Grommet,
  Meter,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text,
} from '../../../../js';
import { grommet } from '../../../../js/themes';

const values = [20, 40, 60, 80, 100];

const MeterInTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Box border pad={{ top: 'xsmall' }}>
        <Table caption="Meter Inside Table">
          <TableBody>
            {values.map((val, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Meter
                    type="bar"
                    values={[
                      {
                        value: val,
                      },
                    ]}
                  />
                </TableCell>
                <TableCell>
                  <Text>{val}% complete</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  </Grommet>
);

storiesOf('Table', module).add('Meter Inside Table', () => <MeterInTable />);
