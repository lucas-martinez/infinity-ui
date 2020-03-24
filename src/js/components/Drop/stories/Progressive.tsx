import { storiesOf } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { Box, Button, Drop, Grommet } from '../../../../js';
import { grommet } from '../../../../js/themes';

const ProgressiveDrop = () => {
  const boxRef = useRef<any>();
  const innerBoxRef = useRef<any>();

  const [openDrop, setOpenDrop] = useState<any>(false);
  const [openInnerDrop, setOpenInnerDrop] = useState<any>(false);
  const [interactedWithInnerButton, setInteractedWithInnerButton] = useState<any>(
    false,
  );

  const onCloseDrop = () => {
    setOpenDrop(false);
    setOpenInnerDrop(false);
  };

  const onOpenDrop = () => {
    setOpenDrop(true);
    setOpenInnerDrop(false);
  };

  return (
    <Grommet theme={grommet} full>
      <Box fill align="center" justify="center">
        <Button ref={boxRef} primary label="Click me" onClick={onOpenDrop} />
        {openDrop && (
          <Drop
            target={boxRef.current}
            onClickOutside={onCloseDrop}
            onEsc={onCloseDrop}
          >
            <Box pad="large" ref={innerBoxRef}>
              <Button
                primary
                label="Click me again"
                onClick={() => setOpenInnerDrop(true)}
              />
            </Box>
            {openInnerDrop && (
              <Drop
                target={innerBoxRef.current}
                onClickOutside={() => setOpenInnerDrop(false)}
                onEsc={() => setOpenInnerDrop(false)}
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
                    onClick={() => setInteractedWithInnerButton(true)}
                  />
                </Box>
              </Drop>
            )}
          </Drop>
        )}
      </Box>
    </Grommet>
  );
};

storiesOf('Drop', module).add('Progressive', () => <ProgressiveDrop />);
