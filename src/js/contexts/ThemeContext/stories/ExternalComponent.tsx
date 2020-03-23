import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Grommet, Text, ThemeContext } from '../../../../js';
import { grommet } from '../../../../js/themes';

const ExternalComponentWithTheme = () => (
  <Grommet theme={grommet}>
    <Box background="neutral-3">
      <Text color="light-1">This is a grommet component</Text>
    </Box>
    <ThemeContext.Consumer>
      {theme => (
        <div style={{ backgroundColor: theme.global.colors['neutral-3'] }}>
          <p style={{ color: theme.global.colors['light-1'] }}>
            This component is leveraging the grommet theme capabilities although
            it is not a grommet component
          </p>
        </div>
      )}
    </ThemeContext.Consumer>
  </Grommet>
);

storiesOf('Theme', module).add('External Components', () => (
  <ExternalComponentWithTheme />
));
