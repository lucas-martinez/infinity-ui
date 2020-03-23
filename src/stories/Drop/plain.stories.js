import { storiesOf } from '@storybook/react';
import { Box, Drop } from 'grommet/components';
import React, { Component, createRef } from 'react';


class PlainDrop extends Component {
  targetRef = createRef();

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <Box background="brand" fill align="center" justify="center">
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
              plain
              align={{ top: 'bottom', left: 'left' }}
              target={this.targetRef.current}
            >
              <Box pad="large">No background no shadow</Box>
            </Drop>
          )}
        </Box>
      </>
    );
  }
}

storiesOf('Grommet 2/Drop', module).add('Plain', () => <PlainDrop />);
