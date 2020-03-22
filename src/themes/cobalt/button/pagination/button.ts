import spec from '../../quantum-spec';

const button = {
  alignItems: spec.global.buttonPagination.alignItems,
  backgroundColor: {
    dark: spec.global.buttonPagination.backgroundColor,
    light: spec.global.buttonPagination.backgroundColor,
  },
  display: spec.global.buttonPagination.display,
  borderWidth: spec.global.buttonPagination.borderWidth,
  borderLeftRightWidth: spec.global.buttonPagination.borderWidthLeftRight,
  color: {
    dark: spec.global.buttonPagination.color,
    light: spec.global.buttonPagination.color,
  },
  fontFamily: spec.global.buttonPagination.fontFamily,
  fontWeight: spec.global.buttonPagination.fontWeight,
  fontWeightBold: spec.global.buttonPagination.fontWeightBold,
  height: spec.global.buttonPagination.height,
  margin: spec.global.buttonPagination.margin,
  minWidth: spec.global.buttonPagination.minWidth,
  outline: spec.global.buttonPagination.outline,
  padding: spec.global.buttonPagination.padding,

  active: {
    backgroundColor: {
      dark: spec.global.buttonPagination.backgroundColorActive,
      light: spec.global.buttonPagination.backgroundColorActive,
    },
    borderLeftRightColor: {
      dark: spec.global.buttonPagination.borderLeftRightActive,
      light: spec.global.buttonPagination.borderLeftRightActive,
    },
    boxShadow: {
      dark: spec.global.buttonPagination.boxShadowActive,
      light: spec.global.buttonPagination.boxShadowActive,
    },
    color: {
      dark: spec.global.buttonPagination.colorActive,
      light: spec.global.buttonPagination.colorActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: spec.global.buttonPagination.backgroundColorDisabled,
      light: spec.global.buttonPagination.backgroundColorDisabled,
    },
    color: {
      dark: spec.global.buttonPagination.colorDisabled,
      light: spec.global.buttonPagination.colorDisabled,
    },
  },

  hover: {
    backgroundColor: {
      dark: spec.global.buttonPagination.backgroundColorHover,
      light: spec.global.buttonPagination.backgroundColorHover,
    },
  },
};

export default button;
