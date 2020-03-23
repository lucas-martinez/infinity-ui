import { storiesOf } from '@storybook/react';
import { Box, Drop } from 'grommet/components';
import React, { Component, createRef } from 'react';


class SimpleDrop extends Component {
  targetRef = createRef();

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <Box fill align="center" justify="center">
          <Box
            background="dark-3"
            pad="medium"
            align="center"
            justify="start"
            ref={this.targetRef}
          >
            Target
          </Box>
          {this.targetRef.current && (
            <Drop
              align={{ top: 'bottom', left: 'left' }}
              target={this.targetRef.current}
            >
              <Box pad="large">Drop Contents</Box>
            </Drop>
          )}
        </Box>
      </>
    );
  }
}

storiesOf('Grommet 2/Drop', module).add('Simple', () => <SimpleDrop />);
