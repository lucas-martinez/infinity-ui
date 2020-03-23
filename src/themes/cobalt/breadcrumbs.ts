import { PartialThemeGenerator } from '.';
import { css } from 'styled-components';
import spec from './quantum-spec';
import { icon } from './icon';

export const breadcrumbs = {
  backgroundColor: {
    dark: spec.global.breadcrumbs.backgroundColorDark,
    light: spec.global.breadcrumbs.backgroundColor,
  },
  borderRadius: spec.global.breadcrumbs.borderRadius,
  display: spec.global.breadcrumbs.display,
  fontSize: spec.global.breadcrumbs.fontSize,
  fontWeight: spec.global.breadcrumbs.fontWeight,
  lineHeight: spec.global.breadcrumbs.lineHeight,
  marginTop: spec.global.breadcrumbs.marginTop,
  marginBottom: spec.global.breadcrumbs.marginBottom,
  padding: spec.global.breadcrumbs.padding,

  focus: {
    borderRadius: spec.global.breadcrumbs.borderRadiusFocus,
  }
};

export const breadcrumbsLink = {
  backgroundColor: {
    dark: spec.global.breadcrumbsLinks.backgroundColorDark,
    light: spec.global.breadcrumbsLinks.backgroundColor,
  },
  color: {
    dark: spec.global.breadcrumbsLinks.colorDark,
    light: spec.global.breadcrumbsLinks.color,
  },
  cursor: spec.global.breadcrumbsLinks.cursor,
  textDecoration: spec.global.breadcrumbsLinks.textDecoration,
  textTransform: spec.global.breadcrumbsLinks.textTransform,

  active: {
    color: {
      dark: spec.global.breadcrumbsLinks.colorActiveDark,
      light: spec.global.breadcrumbsLinks.colorActive,
    },
    fontWeight: spec.global.breadcrumbsLinks.fontWeightActive,
    textDecoration: spec.global.breadcrumbsLinks.textDecorationActive,
  },
  focus: {
    color: {
      dark: spec.global.breadcrumbsLinks.colorFocusDark,
      light: spec.global.breadcrumbsLinks.colorFocus,
    },
    textDecoration: spec.global.breadcrumbsLinks.textDecorationFocus,
  },
  hover: {
    color: {
      dark: spec.global.breadcrumbsLinks.colorHoverDark,
      light: spec.global.breadcrumbsLinks.colorHover,
    },
    textDecoration: spec.global.breadcrumbsLinks.textDecorationHover,
  },
  last: {
    color: {
      dark: spec.global.breadcrumbsLinksLastChild.colorDark,
      light: spec.global.breadcrumbsLinksLastChild.color,
    },
  },
  master: {
    color: {
      dark: spec.global.mastheadBreadcrumbsLinks.colorDark,
      light: spec.global.mastheadBreadcrumbsLinks.color,
    },
    opacity: spec.global.mastheadBreadcrumbsLinks.opacity,
  },
};

export const breadcrumbsSeparation = {
  color: {
    dark: spec.global.breadcrumbsSeparation.colorDark,
    light: spec.global.breadcrumbsSeparation.color,
  },
  content: spec.global.breadcrumbsSeparation.content,
  fontFamily: spec.global.breadcrumbsSeparation.fontFamily,
  fontSize: spec.global.breadcrumbsSeparation.fontSize,
  fontWeight: spec.global.breadcrumbsSeparation.fontWeight,
  padding: spec.global.breadcrumbsSeparation.padding
}

export type BreadcrumbsTheme = typeof breadcrumbs;
export type BreadcrumbsLinkTheme = typeof breadcrumbsLink;
export type BreadcrumbsSeparationTheme = typeof breadcrumbsSeparation;

const generator: PartialThemeGenerator<'breadcrumbs' | 'breadcrumbsLink' | 'breadcrumbsSeparation'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    breadcrumbs,
    breadcrumbsLink,
    breadcrumbsSeparation,
  };
};

export default generator;