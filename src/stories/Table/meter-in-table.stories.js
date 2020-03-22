import { storiesOf } from '@storybook/react';
import { Box, Grommet, Meter, Table, TableBody, TableCell, TableRow, Text } from 'js/components';
import { grommet } from 'js/themes';
import React from 'react';


const values = [20, 40, 60, 80, 100];

const MeterInTable = () => (
  <>
    <Box align="center" pad="large">
      <Box border pad={{ top: 'xsmall' }}>
        <Table caption="Meter Inside Table">
          <TableBody>
            {values.map(val => (
              <TableRow>
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
  </>
);

storiesOf('Grommet 2/Table', module).add('Meter Inside Table', () => <MeterInTable />);
