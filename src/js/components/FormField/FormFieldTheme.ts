import { TextProps } from '../Text';
import { BackgroundType, BorderType, MarginType, PadType, RoundType } from '../../utils';
import ColorType from '../Theme/Color';

export default interface FormFieldTheme {
  border: BorderType;
  content: {
    pad: PadType;
  };
  disabled: {
    background: BackgroundType;
  };
  error: {
    background: BackgroundType;
    color: ColorType;
    margin: MarginType;
  };
  help: {
    color: ColorType;
    margin: MarginType;
  };
  label: TextProps;
  margin: MarginType;
  round: RoundType;
}
