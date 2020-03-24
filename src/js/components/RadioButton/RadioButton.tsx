import React, { forwardRef, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { normalizeColor, removeUndefined } from '../../utils';
import { Box } from '../Box';
import { InputIntrinsicProps } from '../intrinsic-elements';
import {
  StyledRadioButton,
  StyledRadioButtonBox,
  StyledRadioButtonContainer,
  StyledRadioButtonIcon,
  StyledRadioButtonInput,
} from './StyledRadioButton';

export interface RadioButtonProps extends InputIntrinsicProps {
  checked?: boolean;
  disabled?: boolean;
  focus?: boolean;
  id?: string;
  label?: React.ReactNode;
  name: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      checked,
      children,
      disabled,
      focus,
      id,
      label,
      name,
      onChange,
      ...rest
    }: RadioButtonProps,
    ref,
  ) => {
    const theme = useContext(ThemeContext) || defaultProps.theme;
    const [hover, setHover] = useState<boolean>();
    const normalizedLabel =
      typeof label === 'string' ? <span>{label}</span> : label;

    const Icon = theme.radioButton.icons.circle;
    let borderColor = normalizeColor(theme.radioButton.border.color, theme);
    if (checked) {
      borderColor = normalizeColor(theme.radioButton.color || 'control', theme);
    }

    return (
      <StyledRadioButtonContainer
        {...removeUndefined({ htmlFor: id, disabled })}
        onClick={event => {
          // prevents clicking on the label trigging the event twice
          // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
          if (event.target.type !== 'radio') {
            event.stopPropagation();
          }
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <StyledRadioButton
          as={Box}
          margin={
            label ? { right: theme.radioButton.gap || 'small' } : undefined
          }
        >
          <StyledRadioButtonInput
            {...rest}
            ref={ref}
            type="radio"
            {...removeUndefined({
              id,
              name,
              checked,
              disabled,
              onChange,
            })}
          />
          {typeof children === 'function' ? (
            children({ checked, hover })
          ) : (
            <StyledRadioButtonBox
              focus={focus}
              as={Box}
              align="center"
              justify="center"
              width={theme.radioButton.size}
              height={theme.radioButton.size}
              border={{
                size: theme.radioButton.border.width,
                color: borderColor,
              }}
              round={theme.radioButton.check.radius}
            >
              {checked &&
                (Icon ? (
                  <Icon as={StyledRadioButtonIcon} />
                ) : (
                  <StyledRadioButtonIcon
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx={12} cy={12} r={6} />
                  </StyledRadioButtonIcon>
                ))}
            </StyledRadioButtonBox>
          )}
        </StyledRadioButton>
        {normalizedLabel}
      </StyledRadioButtonContainer>
    );
  },
);

RadioButton.displayName = 'RadioButton';

let RadioButtonDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  RadioButtonDoc = require('./doc').doc(RadioButton);
}
const RadioButtonWrapper = RadioButtonDoc || RadioButton;

export { RadioButtonWrapper as RadioButton };
