import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Box, Grommet, Markdown } from '../../../js';
import { grommet } from '../../../js/themes';

const CONTENT = `
  # Out of Breath

  You know, sometimes in life it seems like there's no way out. Like
  a sheep trapped in a maze designed by wolves.

  [reference](#)

\`\`\`
import { Grommet } from '../../../../js';
\`\`\`

  > i carry your heart with me

  ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")

  Markdown | Less | Pretty
  --- | --- | ---
  *Still* | \`renders\` | **nicely**
  1 | 2 | 3
`;

const SimpleMarkdown = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Markdown>{CONTENT}</Markdown>
    </Box>
  </Grommet>
);

const StyledPre = styled.pre<any>`
  background-color: #7d4cdb;
`;

const ComponentOverrideMarkdown = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Markdown components={{ pre: StyledPre }}>{CONTENT}</Markdown>
    </Box>
  </Grommet>
);

storiesOf('Markdown', module)
  .add('Simple', () => <SimpleMarkdown />)
  .add('Component Override Markdown', () => <ComponentOverrideMarkdown />);