import { storiesOf } from '@storybook/react';
import { Box, Drop, Grommet } from 'js/components';
import { grommet } from 'js/themes';
import { deepMerge } from 'js//object';
import React, { Component, createRef } from 'react';


const lazyTheme = deepMerge(grommet, {
  global: {
    drop: {
      background: 'rgba(255, 255, 255, 0.7)',
    },
  },
});

const finalLazyPad = 'xlarge';

class LazyDrop extends Component {
  state = { pad: 'small' };

  topLeftTargetRef = createRef();

  topRightTargetRef = createRef();

  bottomLeftTargetRef = createRef();

  bottomRightTargetRef = createRef();

  componentDidMount() {
    this.forceUpdate();
    setTimeout(() => this.setState({ pad: finalLazyPad }), 2000);
  }

  render() {
    const { pad } = this.state;
    return (
      <Grommet theme={lazyTheme} full>
        <Box fill justify="between" pad="large" gap="small">
          <Box direction="row" justify="between" pad={{ horizontal: 'small' }}>
            <Box
              background="dark-3"
              pad="medium"
              align="center"
              ref={this.topLeftTargetRef}
            >
              Target
            </Box>
            {this.topLeftTargetRef.current && (
              <Drop
                align={{ top: 'bottom', left: 'left' }}
                target={this.topLeftTargetRef.current}
                responsive
              >
                <Box
                  height={pad === 'small' ? 'xsmall' : undefined}
                  pad={{ horizontal: 'xlarge', vertical: pad }}
                >
                  align top to bottom
                </Box>
              </Drop>
            )}
            <Box
              background="dark-3"
              pad="medium"
              align="center"
              ref={this.topRightTargetRef}
            >
              Target
            </Box>
            {this.topRightTargetRef.current && (
              <Drop
                align={{ bottom: 'top', right: 'right' }}
                target={this.topRightTargetRef.current}
                responsive
              >
                <Box
                  height={pad === 'small' ? 'xsmall' : undefined}
                  pad={{ horizontal: 'xlarge', vertical: pad }}
                >
                  align bottom to top
                </Box>
              </Drop>
            )}
          </Box>

          <Box direction="row" justify="between">
            <Box
              background="dark-3"
              pad="medium"
              ref={this.bottomLeftTargetRef}
            >
              Target
            </Box>
            {this.bottomLeftTargetRef.current && (
              <Drop
                align={{ bottom: 'top', left: 'left' }}
                target={this.bottomLeftTargetRef.current}
                responsive
              >
                <Box
                  height={pad === 'small' ? 'xsmall' : undefined}
                  pad={{ horizontal: 'xlarge', vertical: pad }}
                >
                  align bottom to top
                </Box>
              </Drop>
            )}
            <Box
              background="dark-3"
              pad="medium"
              ref={this.bottomRightTargetRef}
            >
              Target
            </Box>
            {this.bottomRightTargetRef.current && (
              <Drop
                align={{ top: 'bottom', right: 'right' }}
                target={this.bottomRightTargetRef.current}
                responsive
              >
                <Box
                  height={pad === 'small' ? 'xsmall' : undefined}
                  pad={{ horizontal: 'xlarge', vertical: pad }}
                >
                  align top to bottom
                </Box>
              </Drop>
            )}
          </Box>
        </Box>
      </Grommet>
    );
  }
}

storiesOf('Grommet 2/Drop', module).add('Lazy', () => <LazyDrop />);
