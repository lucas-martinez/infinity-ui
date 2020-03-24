import ColorType, { StyledValue } from '../../js/components/Theme/Color';

export default interface AlertTheme {
  backgroundColor?: ColorType;
  border: string;
  borderRadius: string;
  color: {
    dark: string;
    light: string;
  };
  depth?: string;
  fontSize: string;
  fontWeight: string;
  marginTop: string;
  marginBottom: string;
  minHeight: string;
  offset: string;
  padding: string;
  paddingBottom: string;
  paddingHorizontal: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingVertical: string;
  textAlign: string;
  textShadow: string;
  width: string;
  close: {
    fontSize: string;
    fontWeight: string;
    opacity: string;
    right: string;
    top: string;
    hover: {
      color: {
        dark: string;
        light: string;
      };
      opacity: string;
    };
  };
  headline: {
    marginTop: string;
  };
  icon: {
    height?: string;
    image?: StyledValue;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    width: string;
  };
  link: {
    opacity: string;
    textDecoration: string;
    hover: {
      opacity: string;
      textDecoration: string;
    };
  };
  linkColor?: ColorType;
  message: {
    marginBottom: string;
    marginTop: string;
  };
  position?: string;
  positionBottom?: string;
  positionTop?: string;
  positionLeft?: string;
  positionRight?: string;
  tooltip: {
    arrow: {
      width: string;
      left: string;
      top: string;
    };
  };
  tooltipBorderColor?: ColorType;
  zIndex?: string;
}
