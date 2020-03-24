import React, { forwardRef, useContext, useState } from 'react';
import { FormContext } from '../Form/FormContext';
import { StyledRangeInput } from './StyledRangeInput';
import { InputIntrinsicProps } from '../intrinsic-elements';

export interface RangeInputProps extends Omit<InputIntrinsicProps, 'onChange'> {
  id?: string;
  min?: number | string;
  max?: number | string;
  name?: string;
  onChange?: (event: React.ChangeEvent) => void;
  step?: number;
  value?: number | string;
}

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (
    {
      name,
      onChange,
      onFocus,
      onBlur,
      value: valueProp,
      ...rest
    },
    ref,
  ) => {
    const formContext = useContext(FormContext);

    const [value, setValue] = formContext.useFormContext(name, valueProp);

    const [focus, setFocus] = useState<any>();
    return (
      <StyledRangeInput
        ref={ref}
        name={name}
        focus={focus}
        value={value}
        {...rest}
        onFocus={event => {
          setFocus(true);
          if (onFocus) onFocus(event);
        }}
        onBlur={event => {
          setFocus(false);
          if (onBlur) onBlur(event);
        }}
        onChange={event => {
          setValue(event.target.value);
          if (onChange) onChange(event);
        }}
        type="range"
      />
    );
  },
);

RangeInput.displayName = 'RangeInput';

let RangeInputDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  RangeInputDoc = require('./doc').doc(RangeInput);
}
const RangeInputWrapper = RangeInputDoc || RangeInput;

export { RangeInputWrapper as RangeInput };
