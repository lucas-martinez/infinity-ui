import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { Box, Video } from '../../js/components';

const SimpleVideo = props => (
  <>
    <Box align="center" pad="large">
      <Video {...props}>
        <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
        <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
        <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
      </Video>
    </Box>
  </>
);

if (!isChromatic()) {
  storiesOf('Grommet 2/TypeScript/Video', module)
    
    .add('Simple', () => <SimpleVideo />)
    .add('Controls Below', () => <SimpleVideo controls="below" />);
}
