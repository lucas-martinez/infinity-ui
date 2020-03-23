import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Grommet, Heading } from '../../js/components';
import { grommet } from '../../js/themes';
import { deepMerge } from '../../js/utils';

const H = ({ level, size }) => (
  <Heading level={level} size={size}>
    {`Heading ${level} ${size}`}
  </Heading>
);

H.propTypes = {
  level: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
};

const Set = ({ size }) => (
  <div>
    {[1, 2, 3, 4, 5, 6].map(level => (
      <H key={level} level={level} size={size} />
    ))}
  </div>
);

Set.propTypes = {
  size: PropTypes.string.isRequired,
};

const All = () => (
  <>
    <Grid columns="large" gap="medium">
      <Set size="medium" />
      <Set size="small" />
      <Set size="large" />
      <Set size="xlarge" />
    </Grid>
  </>
);

const Color = () => (
  <>
    <Heading color="accent-1">Colored Heading</Heading>
  </>
);

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
    <Heading level={5}>Heading level 5</Heading>
  </Grommet>
);

storiesOf('Grommet 2/Heading', module)
  
  .add('All', () => <All />)
  .add('Color', () => <Color />)
  .add('Custom', () => <CustomHeading />);
