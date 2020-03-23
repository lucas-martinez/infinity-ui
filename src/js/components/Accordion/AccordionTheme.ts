import { ColorType } from '../../utils';

export default interface AccordionTheme {
  border: {
    side: string;
    color: ColorType;
  };
  heading: {
    level: string;
  };
  icons: {
    collapse: any;
    expand: any;
    color: ColorType;
  };
}
