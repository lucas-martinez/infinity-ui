import { storiesOf } from '@storybook/react';
import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Drop,
  DropButton,
  Grommet,
  Layer,
  TextInput,
} from '../../../../js';
import { grommet } from '../../../../js/themes';

const MultipleDrop = () => {
  const [showDrop, setShowDrop] = useState<any>(false);
  const [showLayer, setShowLayer] = useState<any>(false);
  const targetRef = useRef<any>();

  return (
    <Grommet theme={grommet} full>
      <Box fill align="center" justify="center">
        <DropButton
          label="drop button"
          dropAlign={{ right: 'left' }}
          dropContent={
            <Box pad="large">
              <TextInput
                value=""
                onChange={() => {}}
                suggestions={['one', 'two']}
              />
            </Box>
          }
        />
        <Button
          ref={targetRef}
          label="button"
          onClick={() => setShowDrop(true)}
        />
        {showDrop && (
          <Drop
            align={{ left: 'right' }}
            target={targetRef.current}
            onClickOutside={() => setShowDrop(false)}
          >
            <Box pad="large">
              <TextInput
                value=""
                onChange={() => {}}
                suggestions={['one', 'two']}
              />
            </Box>
          </Drop>
        )}
        <Button label="layer" onClick={() => setShowLayer(!showLayer)} />
        {showLayer && (
          <Layer position="left" modal={false}>
            <Box pad="large" border>
              <TextInput
                value=""
                onChange={() => {}}
                suggestions={['one', 'two']}
              />
            </Box>
          </Layer>
        )}
      </Box>
    </Grommet>
  );
};

storiesOf('Drop', module).add('Multiple', () => <MultipleDrop />);
