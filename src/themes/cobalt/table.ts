import { css } from 'styled-components';
import pick from '../pick';
import { PartialThemeGenerator } from '.';
import spec from './quantum-spec';
import { text } from './text';

export const table = {
  borderBottomColor: {
    dark: spec.global.table.borderBottomColorHeader,
    light: spec.global.table.borderBottomColorHeader
  },
  borderBottomWidth: spec.global.table.borderBottom,
  borderStyle: spec.global.table.borderStyle,
};

export const tableCell = {
  hover: {
    backgroundColor: {
      dark: spec.global.tableCell.backgroundColorHoverDark,
      light: spec.global.tableCell.backgroundColorHover,
    },
  },
  focus: {
    backgroundColor: {
      dark: spec.global.tableCell.backgroundColorFocusDark,
      light: spec.global.tableCell.backgroundColorFocus,
    }
  },
};

export const tableHeader = {
  borderBottomColor: {
    dark: spec.global.table.borderBottomColorHeader,
    light: spec.global.table.borderBottomColorHeader,
  },
  fontWeight: spec.global.tableHeader.fontWeight,
};

export type TableTheme = typeof table;

const generator: PartialThemeGenerator<'table'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    table: {
      extend: css`
        letter-spacing: ${text.caption.letterSpacing};
        tr {
          border-bottom: ${table.borderBottomWidth} ${table.borderStyle} ${pick(table.borderBottomColor)};
        }
        thead > tr > th {
          font-weight: ${spec.global.tableHeader.fontWeight};
        }
        thead > tr > th > div {
          border-bottom: none;
        }
        tbody > tr {
          &:hover {
            background-color: ${pick(tableCell.hover.backgroundColor)};
          }
          &:focus {
            background-color: ${pick(tableCell.focus.backgroundColor)};
          }
        }
      `,
    },
  };
};

export default generator;
