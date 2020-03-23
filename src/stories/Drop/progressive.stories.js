import { storiesOf } from '@storybook/react';
import { Box, Button, Drop } from 'grommet/components';
import React, { Component, createRef } from 'react';


class ProgressiveDrop extends Component {
  boxRef = createRef();

  innerBoxRef = createRef();

  state = {
    openDrop: false,
    openInnerDrop: false,
    interactedWithInnerButton: false,
  };

  onCloseDrop = () => this.setState({ openDrop: false, openInnerDrop: false });

  onOpenDrop = () => this.setState({ openDrop: true, openInnerDrop: false });

  render() {
    const { openDrop, openInnerDrop, interactedWithInnerButton } = this.state;
    return (
      <>
        <Box fill align="center" justify="center">
          <Button
            ref={this.boxRef}
            primary
            label="Click me"
            onClick={this.onOpenDrop}
          />
          {openDrop && (
            <Drop
              target={this.boxRef.current}
              onClickOutside={this.onCloseDrop}
              onEsc={this.onCloseDrop}
            >
              <Box pad="large" ref={this.innerBoxRef}>
                <Button
                  primary
                  label="Click me again"
                  onClick={() => this.setState({ openInnerDrop: true })}
                />
              </Box>
              {openInnerDrop && (
                <Drop
                  target={this.innerBoxRef.current}
                  onClickOutside={() => this.setState({ openInnerDrop: false })}
                  onEsc={() => this.setState({ openInnerDrop: false })}
                  align={{ top: 'bottom', right: 'right' }}
                >
                  <Box pad="large">
                    <Button
                      primary
                      label={
                        interactedWithInnerButton
                          ? 'Good job!'
                          : 'You can interact with me'
                      }
                      onClick={() =>
                        this.setState({ interactedWithInnerButton: true })
                      }
                    />
                  </Box>
                </Drop>
              )}
            </Drop>
          )}
        </Box>
      </>
    );
  }
}

storiesOf('Grommet 2/Drop', module).add('Progressive', () => <ProgressiveDrop />);
