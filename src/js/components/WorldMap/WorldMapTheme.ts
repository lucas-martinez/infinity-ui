import ColorType from '../Theme/Color';

export default interface WorldMapTheme {
  color: ColorType;
  continent: {
    active: string;
    base: string;
  };
  hover: {
    color: ColorType;
  };
  place: {
    active: string;
    base: string;
  };
}
