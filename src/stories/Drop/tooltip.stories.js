import { storiesOf } from '@storybook/react';
import { Box, Button, Drop } from 'grommet/components';
import React, { useRef, useState } from 'react';


const TooltipDrop = () => {
  const [over, setOver] = useState();
  const ref = useRef();

  return (
    <>
      <Box fill align="center" justify="center">
        <Button
          label="Button"
          ref={ref}
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          onFocus={() => {}}
          onBlur={() => {}}
        />

        {ref.current && over && (
          <Drop align={{ left: 'right' }} target={ref.current} plain>
            <Box
              margin="xsmall"
              pad="small"
              background="dark-3"
              round={{ size: 'medium', corner: 'left' }}
            >
              tooltip contents
            </Box>
          </Drop>
        )}
      </Box>
    </>
  );
};

storiesOf('Grommet 2/Drop', module).add('Tooltip', () => <TooltipDrop />);
