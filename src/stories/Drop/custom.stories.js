import { storiesOf } from '@storybook/react';
import { Box, Drop, Grommet } from 'js/components';
import { grommet } from 'js/themes';
import { deepMerge } from 'js//object';
import React, { Component, createRef } from 'react';


const customTheme = deepMerge(grommet, {
  global: {
    drop: {
      background: { dark: 'neutral-2', light: 'neutral-2' },
      border: { radius: '10px' },
      zIndex: '13',
    },
  },
});

class Custom extends Component {
  targetRef = createRef();

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <Grommet theme={customTheme} full>
        <Box fill align="center" justify="center">
          <Box
            background="dark-3"
            pad="medium"
            align="center"
            justify="start"
            ref={this.targetRef}
          >
            Box
          </Box>
          {this.targetRef.current && (
            <Drop
              align={{ top: 'bottom', left: 'right' }}
              target={this.targetRef.current}
            >
              <Box pad="small">This Drop uses a custom theme</Box>
            </Drop>
          )}
        </Box>
      </Grommet>
    );
  }
}

storiesOf('Grommet 2/Drop', module).add('Custom', () => <Custom />);
