import { ReactComponentElement } from 'react';
import { MarginType, BackgroundType, ColorType } from '../../utils';
import ExtendType from '../Theme/ExtendType';

export default interface SelectTheme {
  background: BackgroundType;
  container: {
    extend: ExtendType;
  };
  control: {
    extend: ExtendType;
    open: boolean;
  };
  extend: ExtendType;
  icons: {
    color: ColorType;
    down: any;
    margin: MarginType;
  };
  options: {
    container: {
      align: string;
      pad: string;
    };
    text: {
      margin: MarginType;
    };
  };
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37506
  searchInput: ReactComponentElement<any>;
  step: number;
}
