import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import spec from './quantum-spec';

const layer: PartialThemeGenerator<'layer'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    layer: {
      overlay: {
        background: spec.global.layerOverlayBackgroundColor,
      },
      background: spec.global.color.light,
      extend: css`
        > div:nth-child(2) {
          border: none;
          border-radius: 0px;
          box-shadow: 4px 4px 4px 8px rgba(0, 0, 0, 0.15);
          font-weight: ${spec.global.navigationTabs.fontWeight};
        }
      `,
    },
  };
};

export default layer;
