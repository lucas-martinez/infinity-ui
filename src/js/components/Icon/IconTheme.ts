import ExtendType from '../Theme/ExtendType';

export default interface IconTheme {
  extend: ExtendType;
  size: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    [x: string]: string | undefined;
  };
}
