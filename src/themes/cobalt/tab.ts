import { PartialThemeGenerator } from '.';
import spec from './quantum-spec';

const { navigationTabs } = spec.global;

export const tab = {
  color: {
    dark: navigationTabs.colorDark,
    light: navigationTabs.color,
  },
  borderColor: {
    dark: navigationTabs.borderColorDark,
    light: navigationTabs.borderColor,
  },
  borderRadius: navigationTabs.borderRadius,
  borderBottomWidth: navigationTabs.borderBottomWidth,
  fontWeight: navigationTabs.fontWeight,
  margin: navigationTabs.margin,
  paddingBottom: navigationTabs.paddingBottom,
  paddingLeft: navigationTabs.paddingLeft,
  paddingRight: navigationTabs.paddingRight,
  transition: navigationTabs.transition,

  active: {
    color: {
      dark: navigationTabs.colorActiveDark,
      light: navigationTabs.colorActive,
    },
    fontWeight: spec.global.text.fontWeightSemiBold,
    transitionWidth: navigationTabs.transitionWidthActive,
  },

  hover: {
    color: {
      dark: spec.global.navigationTabs.colorHoverDark,
      light: spec.global.navigationTabs.colorHover,
    }
  },
  
  small: {
    borderBottomWidth: navigationTabs.borderBottomWidthSmall,
  },
  
};

export type TabTheme = typeof tab;

const generator: PartialThemeGenerator<'tab'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    tab: {
      color: tab.color,
      active: tab.active,
      hover: tab.hover,
    }
  };
};

export default generator;
