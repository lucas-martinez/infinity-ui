import { storiesOf } from '@storybook/react';
import { Diamond } from 'grommet-icons';
import React, { useEffect, useReducer } from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { css } from 'styled-components';
import { Box, Diagram, Grommet, Stack, Text } from '../../js/components';
import { grommet } from '../../js/themes';
import { deepMerge } from '../../js/utils';
import { data } from './data';


const customTheme = deepMerge(grommet, {
  diagram: {
    extend: css`@keyframes 
      example {
        to {
          stroke-dashoffset: 0;
        }
      }
      path {
        stroke-dasharray: 500;
        stroke-dashoffset: 500;
        animation: example 3s linear forwards;
      }`,
  },
});

const connection = (
  fromTarget: string,
  toTarget: string,
  { ...rest } = {},
) => ({
  fromTarget,
  toTarget,
  anchor: 'vertical',
  color: 'accent-4',
  thickness: 'xsmall',
  round: true,
  type: 'curved',
  ...rest,
});

const DiamondContainer = ({ carat, color, cut, id, name, textSize }) => (
  <Box align="center" alignSelf="center" direction="row" gap="medium" key={id}>
    <Diamond id={id} size="xlarge" color="neutral-3" />
    <Box>
      <Text size="medium" weight="bold">
        {name}
      </Text>
      {carat && <Text size={textSize}> Carat: {carat} </Text>}
      {color && <Text size={textSize}> Color: {color} </Text>}
      {cut && <Text size={textSize}> Cut: {cut} </Text>}
    </Box>
  </Box>
);

const Container = ({ node, index }) => (
  <DiamondContainer
    carat={node.carat}
    color={node.color}
    cut={node.cut}
    id={index}
    key={node.name}
    name={node.name}
    textSize="small"
  />
);

const Animated = () => {
  const reducer = (state: boolean, draw?: boolean | undefined): boolean => draw || !state;

  const [draw, toggleDraw] = useReducer(reducer, true);

  useEffect(() => {
    const timer = setInterval(() => {
      toggleDraw();
    }, 2000);
    return () => clearInterval(timer);
  }, [toggleDraw]);

  const connections: any[] = [];

  if (draw) {
    connections.push(connection('4', '1', { anchor: 'vertical' }));
    connections.push(connection('4', '2', { anchor: 'vertical' }));
    connections.push(connection('4', '3', { anchor: 'vertical' }));
  }

  return (
    <Grommet theme={customTheme}>
      <Box align="center">
        <Box pad="large">
          <Stack>
            <Box>
              <Box alignSelf="center" margin={{ bottom: 'large' }}>
                <Container node={data[0]} index={1} />
                <Box pad="small" />
                <Box
                  id="4"
                  width="xsmall"
                  margin={{ bottom: 'large', top: 'xlarge' }}
                />
              </Box>
              <Box direction="row" gap="xlarge">
                {[2, 3].map(id => (
                  <Container key={id} node={data[id - 1]} index={id} />
                ))}
              </Box>
            </Box>
            <Diagram connections={connections} />
          </Stack>
        </Box>
      </Box>
    </Grommet>
  );
};

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Diagram', module).add('Animated', () => <Animated />);
}