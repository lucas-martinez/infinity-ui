import spec from './quantum-spec';

export const navigationPills = {
  color: {
    dark: spec.global.navigationPills.colorDark,
    light: spec.global.navigationPills.color,
  },

  borderRadius: Number(spec.global.navigationPills.borderRadius),
  borderSize: spec.global.navigationPills.borderSize,
  borderStyle: spec.global.navigationPills.borderStyle,
  borderColor: {
    dark: spec.global.navigationPills.borderColorDark,
    light: spec.global.navigationPills.borderColor,
  },
  border: spec.global.navigationPills.border,

  fontSize: spec.global.navigationPills.fontSize,
  fontWeight: spec.global.navigationPills.fontWeight,

  height: spec.global.navigationPills.height,
  letterSpacing: spec.global.navigationPills.letterSpacing,
  lineHeight: spec.global.navigationPills.lineHeight,

  paddingBottom: spec.global.navigationPills.paddingBottom,
  paddingLeft: spec.global.navigationPills.paddingLeft,
  paddingRight: spec.global.navigationPills.paddingRight,
  paddingTop: spec.global.navigationPills.paddingTop,

  padding: spec.global.navigationPills.padding,
  marginBottom: spec.global.navigationPills.marginBottom,
  marginLeft: spec.global.navigationPills.marginLeft,
  // marginLeft: spec.global.navigationPillsMarginLeft,
  marginTop: spec.global.navigationPills.marginTop,
  marginRight: spec.global.navigationPillsMarginRight,
  textTransform: spec.global.navigationPills.textTransform,

  active: {
    backgroundColor: {
      dark: spec.global.navigationPills.backgroundColorActiveDark,
      light: spec.global.navigationPills.backgroundColorActive,
    },
    boxShadow: {
      dark: spec.global.navigationPills.boxShadowActiveDark,
      light: spec.global.navigationPills.boxShadowActive,
    },
    color: {
      dark: spec.global.navigationPills.colorActiveDark,
      light: spec.global.navigationPills.colorActive,
    },
    fontWeight: spec.global.navigationPills.fontWeightActive,

    hover: {
      color: {
        dark: spec.global.navigationPills.colorHoverActiveDark,
        light: spec.global.navigationPills.colorHoverActive,
      },
    },

    focus: {
      color: {
        dark: spec.global.navigationPills.colorFocusActiveDark,
        light: spec.global.navigationPills.colorFocusActive,
      },
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.navigationPills.backgroundColorDisabledDark,
      light: spec.global.navigationPills.backgroundColorDisabled,
    },
    borderColor: {
      dark: spec.global.navigationPills.borderColorDisabledDark,
      light: spec.global.navigationPills.borderColorDisabled,
    },
    color: {
      dark: spec.global.navigationPills.colorDisabledDark,
      light: spec.global.navigationPills.colorDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: spec.global.navigationPills.backgroundColorFocusDark,
      light: spec.global.navigationPills.backgroundColorFocus,
    },
    borderColor: {
      dark: spec.global.navigationPills.borderColorFocusDark,
      light: spec.global.navigationPills.borderColorFocus,
    },
    color: {
      dark: spec.global.navigationPills.colorFocusDark,
      light: spec.global.navigationPills.colorFocus,
    },
    outlineColor: {
      dark: spec.global.navigationPills.outlineColorFocus,
      light: spec.global.navigationPills.outlineColorFocus,
    },
    textDecoration: spec.global.navigationPills.textDecorationFocus,
  },

  hover: {
    backgroundColor: {
      dark: spec.global.navigationPills.backgroundColorHoverDark,
      light: spec.global.navigationPills.backgroundColorHover,
    },
    color: {
      dark: spec.global.navigationPills.colorHoverDark,
      light: spec.global.navigationPills.colorHover,
    },
    textDecoration: spec.global.navigationPills.textDecorationHover,
  },

  indent: {
    paddingLeft: spec.global.navigationPills.paddingLeftIndent,
  },

  large: {
    height: spec.global.navigationPills.heightLarge,
    paddingBottom: spec.global.navigationPills.paddingBottomLarge,
    paddingTop: spec.global.navigationPills.paddingTopLarge,
  },

  noCaret: {
    paddingLeft: spec.global.navigationPills.paddingLeftNoCaret,
  },

  navigationPillsIcon: {
    width: '16px',
    marginRight: '16px',
  },
};

export const navigationPillsCaret = {
  color: {
    dark: spec.global.navigationPillsCaret.colorDark,
    light: spec.global.navigationPillsCaret.color,
  },
  content: spec.global.navigationPillsCaret.content,
  display: spec.global.navigationPillsCaret.display,
  fontFamily: spec.global.navigationPillsCaret.fontFamily,
  fontSize: spec.global.navigationPillsCaret.fontSize,
  fontWeight: spec.global.navigationPillsCaret.fontWeight,
  transition: spec.global.navigationPillsCaret.transition,
  width: spec.global.navigationPillsCaret.width,
  height: spec.global.navigationPillsCaret.height,
  transformOrigin: spec.global.navigationPillsCaret.transformOrigin,

  active: {
    color: {
      dark: spec.global.navigationPillsCaret.colorActiveDark,
      light: spec.global.navigationPillsCaret.colorActive,
    },
    fontWeight: spec.global.navigationPillsCaret.fontWeightActive,
  },

  open: {
    content: spec.global.navigationPillsCaret.contentOpen,
    transform: spec.global.navigationPillsCaret.transformOpen,
  },

  subNav: {
    content: spec.global.navigationPillsCaret.contentSubNav,
    fontSize: spec.global.navigationPillsCaret.fontSizeSubNav,
    height: spec.global.navigationPillsCaret.heightSubNav,
    paddingTop: spec.global.navigationPillsCaret.paddingTopSubNav,
    width: spec.global.navigationPillsCaret.widthSubNav,
  },

  paddingRight: spec.global.navigationPillsCaret.paddingRight,
};

export const navigationPillsChild = {
  active: {
    backgroundColor: {
      dark: spec.global.navigationPills.backgroundColorChildActiveDark,
      light: spec.global.navigationPills.backgroundColorChildActive,
    },
    color: {
      dark: spec.global.navigationPills.colorChildActiveDark,
      light: spec.global.navigationPills.colorChildActive,
    },
    fontWeight: spec.global.navigationPills.fontWeightChildActive,
  },
};

export const navigationPillsContainer = {
  backgroundColor: {
    dark: spec.global.navigationPillsContainer.backgroundColorDark,
    light: spec.global.navigationPillsContainer.backgroundColor,
  },
  marginBottom: spec.global.navigationPillsContainer.marginBottom,
};

export const navigationPillsExpander = {
  marginLeft: spec.global.navigationPillsExpander.marginLeft,
  offset: spec.global.navigationPillsExpanderOffset,
  width: spec.global.navigationPillsExpander.width,
};

export const navigationPillsHighlight = {
  backgroundColor: {
    dark: spec.global.navigationPillsHighlight.backgroundColorDark,
    light: spec.global.navigationPillsHighlight.backgroundColor,
  },
  content: spec.global.navigationPillsHighlight.content,
  display: spec.global.navigationPillsHighlight.display,
  height: spec.global.navigationPillsHighlight.height,
  position: spec.global.navigationPillsHighlight.position,
  top: spec.global.navigationPillsHighlight.top,
  width: spec.global.navigationPillsHighlight.width,

  transitionProperty: spec.global.navigationPillsHighlight.transitionProperty,
  transitionDuration: spec.global.navigationPillsHighlight.transitionDuration,
  transitionTimingFunction: spec.global.navigationPillsHighlight.transitionTimingFunction,

  active: {
    height: spec.global.navigationPillsHighlight.heightActive,
    top: spec.global.navigationPillsHighlight.topActive,
  },
};

export const navigationPillsSubNav = {
  fontSize: spec.global.navigationPills.fontSizeSubNav,
  fontWeight: spec.global.navigationPills.fontWeightSubNav,
  textTransform: spec.global.navigationPills.textTransformSubNav,
  letterSpacing: spec.global.navigationPills.letterSpacingSubNav,
  lineHeight: spec.global.navigationPills.lineHeightSubNav,
  height: spec.global.navigationPills.heightSubNav,
  opacity: spec.global.navigationPills.opacitySubNav,
  transform: spec.global.navigationPills.transformSubNav,
  transition: spec.global.navigationPills.transitionSubNav,
  paddingLeft: spec.global.navigationPills.paddingLeftSubNav,
  paddingLeft1: spec.global.navigationPills.paddingLeftSub1Nav,
  paddingLeft2: spec.global.navigationPills.paddingLeftSub2Nav,
  paddingLeft3: spec.global.navigationPills.paddingLeftSub3Nav,
  paddingLeft4: spec.global.navigationPills.paddingLeftSub4Nav,

  marginLeft: spec.global.navigationPills.marginLeftSubNav,
  marginLeft1: spec.global.navigationPills.marginLeftSub1Nav,
  marginLeft2: spec.global.navigationPills.marginLeftSub2Nav,
  marginLeft3: spec.global.navigationPills.marginLeftSub3Nav,
  marginLeft4: spec.global.navigationPills.marginLeftSub4Nav,

  paddingTop: spec.global.navigationPills.paddingTopSubNav,
  paddingBottom: spec.global.navigationPills.paddingBottomSubNav,
  paddingTop3: spec.global.navigationPills.paddingTopSub3Nav,
  paddingTop4: spec.global.navigationPills.paddingTopSub4Nav,

  icon: {
    paddingLeft: spec.global.navigationPills.paddingLeftSubNavIcon,
  },

  indent: {
    paddingLeft: spec.global.navigationPills.paddingLeftSubNavIndent,
    paddingLeft1: spec.global.navigationPills.paddingLeftSub1NavIndent,
    paddingLeft2: spec.global.navigationPills.paddingLeftSub2NavIndent,
    paddingLeft3: spec.global.navigationPills.paddingLeftSub3NavIndent,
    paddingLeft4: spec.global.navigationPills.paddingLeftSub4NavIndent,
  },

  hide: {
    height: spec.global.navigationPills.heightSubNavHide,
    opacity: spec.global.navigationPills.opacitySubNavHide,
    transform: spec.global.navigationPills.transformSubNavHide,
    transition: spec.global.navigationPills.transitionSubNavHide,
  },

  noCaret: {
    paddingLeft: spec.global.navigationPills.paddingLeftSubNavNoCaret,
  },
};

export const navigationPillsTitle = {
  color: {
    dark: spec.global.navigationPillsTitle.colorDark,
    light: spec.global.navigationPillsTitle.color,
  },
  marginLeft: spec.global.navigationPillsTitle.marginLeft,
};
