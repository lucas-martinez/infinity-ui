export default interface CalendarTheme {
  small: {
    fontSize: string;
    lineHeight: number;
    daySize: string;
    slideDuration: string;
  };
  medium: {
    fontSize: string;
    lineHeight: number;
    daySize: string;
    slideDuration: string;
  };
  large: {
    fontSize: string;
    lineHeight: number;
    daySize: string;
    slideDuration: string;
  };
  heading: {
    level: string;
  };
  icons: {
    previous: any;
    next: any;
    small: {
      previous: any;
      next: any;
    };
  };
}