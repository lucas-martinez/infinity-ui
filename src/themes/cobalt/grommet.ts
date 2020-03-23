import { PartialThemeGenerator } from '.';
import { css } from 'styled-components';
import spec from './quantum-spec';
import { icon } from './icon';

const {
  color,
  masthead,
  mastheadButton,
  mastheadIcon,
  mastheadNavigationItem,
  scrollbar,
  scrollbarRail,
  scrollbarThumb,
  text,
  tooltip,
  tooltipArrow,
  ...global
} = spec.global;

export const grommet = {
  extend: css`
    ::-webkit-scrollbar {
      height: ${scrollbar.height};
      width: ${scrollbar.width};
      transition: ${scrollbar.transition};
    }
    ::-webkit-scrollbar-thumb {
      background: ${scrollbarThumb.color};
      radius: ${scrollbarThumb.radius};
      border: ${scrollbarThumb.border};
      background-clip: content-box;
    }
    ::-webkit-scrollbar-track {
      background-color: ${scrollbarRail.color};
    }
    button[aria-label='Open Menu'] {
      span {
        font-weight: ${text.fontWeightBold};
        font-size: ${text.navigationSecondaryFontSize};
        line-height: ${text.lineHeight};
        text-transform: uppercase;
      }
    }
    .quantum-ux_tooltip {
      white-space: nowrap;
      min-width: 100px;
      max-width: ${tooltip.maxWidth};
      padding: ${tooltip.padding};
      border: ${tooltip.border};
      color: ${tooltip.color};
      z-index: 1;
      text-align: center;
      border-radius: 0px;
      font-size: ${tooltip.fontSize};
      font-weight: ${text.fontWeight};
      white-space: pre-line;
      word-break: break-all;
      background-color: ${tooltip.backgroundColor};
      &.place-right {
        &:before {
          border-right: ${tooltipArrow.size} solid ${color.neutral3};
        }
        &:after {
          border-right-color: ${tooltip.backgroundColor};
        }
      }
      &.place-top {
        &:before {
          border-top: ${tooltipArrow.size} solid ${color.neutral3};
        }
        &:after {
          border-top-color: ${tooltip.backgroundColor};
        }
      }
      &.place-bottom {
        &:before {
          border-bottom: ${tooltipArrow.size} solid ${color.neutral3};
        }
        &:after {
          border-bottom-color: ${tooltip.backgroundColor};
        }
      }
      &.place-left {
        &:before {
          border-left: ${tooltipArrow.size} solid
            ${color.neutral3};
        }
        &:after {
          border-left-color: ${tooltip.backgroundColor};
        }
      }
    }
    header {
      &.masthead {
        background-color: ${color.primary};
        min-height: ${masthead.height};
        padding-left: ${global.mastheadPaddingLeft};
        padding-right: ${masthead.paddingRight};
        font-weight: ${text.fontWeightBold};
        font-size: ${text.fontSizeLarge};

        > :first-child {
          width: ${masthead.height};
          height: ${masthead.height};
          background-color: ${color.secondary2};
          color: ${mastheadIcon.color};
          justify-content: ${global.mastheadJustifyContent};
          margin-right: ${global.mastheadMarginRight};
          text-align: center;
        }

        a {
          color: ${global.mastheadColor};
          text-transform: ${global.mastheadTextTransform};
          text-decoration: ${global.mastheadTextDecoration};
          font-size: ${text.headline3FontSize};
          line-height: ${text.headline3FontSize};
          letter-spacing: ${text.headline3LetterSpacing};
          color: ${mastheadButton.color};
          font-weight: ${text.fontWeightMedium};
          margin-left: ${global.mastheadMarginLeft};
          margin-right: ${global.mastheadMarginRight};
          margin-top: ${global.mastheadMarginTop};

          &:after {
            background-color: ${color.light};
          }

          &.active {
            border-bottom-style: ${global.mastheadBorderBottomStyle};
            border-bottom-width: ${mastheadNavigationItem.borderBottomWidthActive};
            border-bottom-color: ${mastheadButton.color};
            margin-bottom: ${global.mastheadMarginBottom};
            transform: scaleX(1);
            font-weight: ${text.fontWeightBold};
          }
        }
      }
    }
  `,
};

export type GrommetTheme = typeof grommet;

const generator: PartialThemeGenerator<'grommet'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    grommet,
  };
};

export default generator;
