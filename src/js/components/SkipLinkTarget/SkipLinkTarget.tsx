import React from 'react';
import styled from 'styled-components';

import { Anchor } from '../Anchor';

const HiddenAnchor = styled(Anchor)`
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
`;

export interface SkipLinkTargetProps {
  id: string;
  label?: React.ReactNode;
}

export const SkipLinkTarget = ({ label, ...rest }: SkipLinkTargetProps) => (
  <HiddenAnchor {...rest} tabIndex="-1" aria-hidden="true">
    {label}
  </HiddenAnchor>
);
