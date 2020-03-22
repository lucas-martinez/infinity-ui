import { Colors } from '../../../js/themes/base';
import { ColorType } from '../../../js/utils';
import spec from '../quantum-spec';
import { text } from '../text';
import { brand_blue_hex, brand_w3c_hex, fuchsia_hex, indigo_hex } from './base';

export const undefinedColor = {
  dark: indigo_hex,
  light: fuchsia_hex,
};

const tuplify = (prefix: string, arr: ColorType[]): [string, ColorType][] =>
  arr.map((val, index) => [`${prefix}-${index + 1}`, val]);

const objectify = (tuples: [string, ColorType][]): Record<string, ColorType> =>
  tuples.reduce((acc, [key, val]) => Object.assign(acc, { [key]: val }), {});

export const status = {
  critical: spec.global.color.critical,
  error: spec.global.color.error,
  warning: spec.global.color.warning,
  ok: spec.global.color.normal,
  unknown: spec.global.color.severityUnknown,
  disabled: spec.global.color.textDisabled,
};

export const color = {
  accent: {
    dark: spec.global.color.accentDark,
    darker: spec.global.color.accentDarker,
  },
  accent1: {
    dark: spec.global.color.accentDark,
    light: spec.global.color.accent1,
  },
  accent2: {
    dark: spec.global.color.accentDark,
    light: spec.global.color.accent2,
  },
  accent3: {
    dark: spec.global.color.accentDark,
    light: spec.global.color.accent3,
  },
  accent4: {
    dark: spec.global.color.accentDark,
    light: spec.global.color.accent4,
  },
  accent5: {
    dark: spec.global.color.accentDark,
    light: spec.global.color.accent5,
  },

  alternative1: spec.global.color.alternative1,
  alternative2: spec.global.color.alternative2,
  alternative3: spec.global.color.alternative3,
  alternative4: spec.global.color.alternative4,
  alternative5: spec.global.color.alternative5,
  alternative6: spec.global.color.alternative6,

  background: {
    dark: spec.global.color.backgroundDark,
    light: spec.global.color.light,
  },
  dark: {
    dark: spec.global.color.darkDark,
    light: spec.global.color.dark,
  },
  darkest: {
    dark: spec.global.color.darkestDark,
    light: spec.global.color.darkest,
  },
  divider: {
    dark: spec.global.color.dividerDark,
    light: spec.global.color.divider,
  },
  
  brand: {
    dark: brand_w3c_hex,
    light: brand_blue_hex, 
  },

  dropShadow: spec.global.color.dropShadowColor,
  focus: {
    dark: spec.global.color.focusDark,
    light: spec.global.color.focus,
  },

  greyShade05: spec.global.color.greyShade05,
  greyShade2: spec.global.color.greyShade2,
  greyShade1: spec.global.color.greyShade1,

  light: spec.global.color.light,

  lighten05: spec.global.color.lighten05,
  lighten1: spec.global.color.lighten1,
  lighten2: spec.global.color.lighten2,
  lighten4: spec.global.color.lighten4,
  lighten5: spec.global.color.lighten5,
  lighten6: spec.global.color.lighten6,
  lighten7: spec.global.color.lighten7,
  lighten8: spec.global.color.lighten8,
  lighten9: spec.global.color.lighten9,

  negative: {
    dark: spec.global.color.negativeDark,
    darker: spec.global.color.negativeDarker,
  },

  neutral1: spec.global.color.neutral1,
  neutral2: spec.global.color.neutral2,
  neutral3: spec.global.color.neutral3,
  neutral4: spec.global.color.neutral4,
  neutral5: spec.global.color.neutral5,

  positive: {
    dark: spec.global.color.positiveDark,
    darker: spec.global.color.positiveDarker,
  },
  primary: {
    dark: spec.global.color.primaryDark,
    darker: spec.global.color.primaryDarker,
    light: spec.global.color.primary,
  },
  primaryHover: {
    dark: spec.global.color.primaryHoverDark,
    light: spec.global.color.primaryHover,
  },
  primaryHoverSmall: {
    dark: spec.global.color.primaryHoverSmallDark,
    light: spec.global.color.primaryHoverSmall,
  },
  primarySelected: {
    dark: spec.global.color.primarySelectedDark,
    light: spec.global.color.primarySelected,
  },

  shade02: spec.global.color.shade02,
  shade05: spec.global.color.shade05,
  shade1: spec.global.color.shade1,
  shade2: spec.global.color.shade2,
  shade3: spec.global.color.shade3,
  shade4: spec.global.color.shade4,
  shade5: spec.global.color.shade5,
  shade6: spec.global.color.shade6,
  shade7: spec.global.color.shade7,
  shade8: spec.global.color.shade8,
  shade9: spec.global.color.shade9,

  status,

  textDisabled: text.disabled.color,
  textEmphasis: text.emphasis.color,
  textMuted: text.muted.color,
  textPrimary: text.primary.color,
  textSecondary: text.secondary.color,
};

export const accents = [
  color.alternative1,
  color.alternative2,
  color.alternative3,
  color.alternative4,
  color.alternative5,
  color.alternative6,
];

export const highlights = [
  spec.global.color.secondary1,
  spec.global.color.secondary2,
  spec.global.color.secondary3,
  spec.global.color.secondary4,
  spec.global.color.secondary5,
  spec.global.color.secondary6,
  spec.global.color.secondary7,
  spec.global.color.secondary8,
];

export const neutrals = [
  spec.global.color.neutral1,
  spec.global.color.neutral2,
  spec.global.color.neutral3,
  spec.global.color.neutral4,
  spec.global.color.neutral5,
];

export const shades = [
  spec.global.color.secondary9,
  spec.global.color.secondary10,
  spec.global.color.secondary11,
  spec.global.color.secondary12,
  spec.global.color.secondary13,
  spec.global.color.secondary14,
  spec.global.color.secondary15,
  spec.global.color.secondary16,
];

export const statusHighlights = [
  spec.global.color.secondary17,
  spec.global.color.secondary18,
  spec.global.color.secondary19,
  spec.global.color.secondary20,
];

export const statusShades = [
  spec.global.color.secondary21,
  spec.global.color.secondary22,
  spec.global.color.secondary23,
  spec.global.color.secondary24,
];

export const colors: Colors = {
  // active: rgba(221, 221, 221, 0.5),
  background: color.background,
  // black: '#000000',
  dark: color.dark,
  darkest: color.darkest,
  light: color.light,
  /*
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33),
  },
  */
  brand: color.brand,
  primary: color.brand,
  /*
  control: {
    dark: 'accent-1',
    light: 'brand',
  },
  */
  focus: color.focus,
  // placeholder: '#AAAAAA',
  // selected: 'brand',
  /*
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  */
  /*
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  */
  // white: '#FFFFFF',

  ...objectify(tuplify('accent', accents)),
  ...objectify(tuplify('dark', [spec.global.color.darkest, spec.global.color.dark])),
  ...objectify(tuplify('light', [spec.global.color.light, spec.global.color.neutral5])),
  ...objectify(tuplify('neutral', neutrals)),
  ...objectify(tuplify('highlight', highlights)),
  ...objectify(tuplify('shade', shades)),
  ...objectify(tuplify('statushighlight', statusHighlights)),
  ...objectify(tuplify('statusshade', statusShades)),
  ...objectify(Object.entries(status).map(([key, val]) => [`status-${key}`, val])),
};

// export const accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
// export const neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];

export type ExtendedColorsType = typeof colors & Record<string, ColorType>;

export default colors;
