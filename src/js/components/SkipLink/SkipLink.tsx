import React from 'react';
import { Anchor } from '../Anchor';
import { Box } from '../Box';

export interface SkipLinkProps {
  id: string;
  label?: React.ReactNode;
}

export const SkipLink: React.FC<SkipLinkProps> = ({ id, label, ...rest }) => (
  <Box margin="small">
    <Anchor href={`#${id}`} label={label} {...rest} />
  </Box>
);
