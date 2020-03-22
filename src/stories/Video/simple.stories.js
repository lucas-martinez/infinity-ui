import { storiesOf } from '@storybook/react';
import { Box, Video } from 'grommet/components';
import React from 'react';


const SimpleVideo = props => (
  <>
    <Box align="center" pad="large">
      <Video {...props}>
        <source
          src="http://techslides.com/demos/sample-videos/small.webm"
          type="video/webm"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.ogv"
          type="video/ogg"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.mp4"
          type="video/mp4"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.3gp"
          type="video/3gp"
        />
      </Video>
    </Box>
  </>
);

storiesOf('Grommet 2/Video', module)
  
  .add('Simple', () => <SimpleVideo />)
  .add('Controls Below', () => <SimpleVideo controls="below" />);
