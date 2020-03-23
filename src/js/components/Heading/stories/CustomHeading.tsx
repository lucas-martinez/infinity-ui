import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Heading } from 'js';
import { grommet } from 'js/themes';
import { deepMerge } from 'js/utils';

const customlevel = deepMerge(grommet, {
  heading: {
    level: {
      5: {
        small: {
          size: '12px',
          height: '16px',
        },
        medium: {
          size: '14px',
          height: '18px',
        },
        large: {
          size: '16px',
          height: '20px',
        },
      },
    },
    extend: props => `color: ${props.theme.global.colors.brand}`,
  },
});
const CustomHeading = () => (
  <Grommet theme={customlevel}>
    <Heading level={5} size="small">
      Heading level 5 small
    </Heading>
    <Heading level={5} size="medium">
      Heading level 5 small
    </Heading>
    <Heading level={5} size="large">
      Heading level 5 small
    </Heading>
  </Grommet>
);

storiesOf('Heading', module).add('Custom', () => <CustomHeading />);
