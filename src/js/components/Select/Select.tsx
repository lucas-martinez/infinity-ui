import React, {
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  A11yTitleType,
  AlignSelfType,
  controlBorderStyle,
  GridAreaType,
  MarginType,
  normalizeColor,
  PlaceHolderType,
} from '../../utils';
import { Box } from '../Box';
import { DropProps } from '../Drop';
import { DropButton } from '../DropButton';
import { FormContext } from '../Form/FormContext';
import { SelectIntrinsicProps } from '../intrinsic-elements';
import { Keyboard } from '../Keyboard';
import { TextInput } from '../TextInput';
import useTheme from '../Theme/useTheme';
import { SelectContainer } from './SelectContainer';

const SelectTextInput = styled(TextInput)`
  cursor: pointer;
`;

const StyledSelectDropButton = styled(DropButton)`
  ${props => !props.plain && controlBorderStyle};
  ${props =>
    props.theme.select &&
    props.theme.select.control &&
    props.theme.select.control.extend};
  ${props => props.open && props.theme.select.control.open};
`;

export interface SelectProps extends Omit<SelectIntrinsicProps, 'placeholder'> {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  gridArea?: GridAreaType;
  children?: (...args: any[]) => any;
  closeOnChange?: boolean;
  disabled?: boolean | (number | string | object)[];
  disabledKey?: string | ((...args: any[]) => any);
  dropAlign?: {
    top?: 'top' | 'bottom';
    bottom?: 'top' | 'bottom';
    right?: 'left' | 'right';
    left?: 'left' | 'right';
  };
  dropHeight?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | string;
  dropTarget?: object;
  dropProps?: DropProps;
  focusIndicator?: boolean;
  icon?: boolean | ((...args: any[]) => any) | React.ReactNode;
  id?: string;
  labelKey?: string | ((...args: any[]) => any);
  margin?: MarginType;
  messages?: { multiple?: string };
  multiple?: boolean;
  name?: string;
  onChange?: (...args: any[]) => void;
  onClose?: (...args: any[]) => any;
  onMore?: (...args: any[]) => any;
  onOpen?: (...args: any[]) => any;
  onSearch?: (search: string) => void;
  options: (string | boolean | number | JSX.Element | object)[];
  open?: boolean;
  placeholder?: PlaceHolderType;
  plain?: boolean;
  replace?: boolean;
  searchPlaceholder?: string;
  selected?: number | number[];
  size?: 'small' | 'medium' | 'large' | 'xlarge' | string;
  value?: string | JSX.Element | object | (string | object)[];
  valueLabel?: React.ReactNode;
  valueKey?: string | ((...args: any[]) => any);
  emptySearchMessage?: string;
}

const Select = forwardRef(
  (
    {
      a11yTitle,
      alignSelf,
      children,
      closeOnChange = true,
      disabled,
      disabledKey,
      dropAlign = { top: 'bottom', left: 'left' },
      dropHeight,
      dropProps,
      dropTarget,
      emptySearchMessage,
      focusIndicator,
      gridArea,
      id,
      icon,
      labelKey,
      margin,
      messages = { multiple: 'multiple' },
      multiple,
      name,
      onChange,
      onClose,
      onKeyDown,
      onMore,
      onOpen,
      onSearch,
      open: propOpen,
      options,
      placeholder,
      plain,
      replace,
      searchPlaceholder,
      selected,
      size,
      value: valueProp,
      valueKey,
      valueLabel,
      ...rest
    }: SelectProps,
    ref,
  ) => {
    const theme = useTheme();
    const inputRef = useRef<any>();
    const formContext = useContext(FormContext);

    const [value, setValue] = formContext.useFormContext(name, valueProp);

    const [open, setOpen] = useState<any>(propOpen);
    useEffect(() => {
      setOpen(propOpen);
    }, [propOpen]);

    const onRequestOpen = () => {
      setOpen(true);
      if (onOpen) {
        onOpen();
      }
    };

    const onRequestClose = () => {
      setOpen(false);
      if (onClose) {
        onClose();
      }
    };

    const onSelectChange = (event, ...args) => {
      if (closeOnChange) onRequestClose();
      setValue(event.value);
      if (onChange) onChange({ ...event, target: inputRef.current }, ...args);
    };

    let SelectIcon;
    switch (icon) {
      case false:
        break;
      case true:
      case undefined:
        SelectIcon = theme.select.icons.down;
        break;
      default:
        SelectIcon = icon;
    }
    let selectValue: any;
    let inputValue: any = '';
    if (valueLabel) {
      selectValue = valueLabel;
    } else if (Array.isArray(value)) {
      if (value.length > 1) {
        if (React.isValidElement(value[0])) {
          selectValue = value;
        } else {
          inputValue = messages.multiple;
        }
      } else if (value.length === 1) {
        if (React.isValidElement(value[0])) {
          [selectValue] = value;
        } else if (labelKey && typeof value[0] === 'object') {
          if (typeof labelKey === 'function') {
            inputValue = labelKey(value[0]);
          } else {
            inputValue = value[0][labelKey];
          }
        } else {
          [inputValue] = value;
        }
      } else {
        inputValue = '';
      }
    } else if (labelKey && typeof value === 'object') {
      if (typeof labelKey === 'function') {
        inputValue = labelKey(value);
      } else {
        inputValue = value[labelKey];
      }
    } else if (React.isValidElement(value)) {
      selectValue = value; // deprecated in favor of valueLabel
    } else if (selected !== undefined) {
      if (Array.isArray(selected)) {
        if (selected.length > 1) {
          inputValue = messages.multiple;
        } else if (selected.length === 1) {
          inputValue = options[selected[0]];
        }
      } else {
        inputValue = options[selected];
      }
    } else {
      inputValue = value;
    }

    // const dark = theme.select.background
    // ? colorIsDark(theme.select.background)
    // : theme.dark;
    const iconColor = normalizeColor(
      theme.select.icons.color || 'control',
      theme,
    );

    return (
      <Keyboard onDown={onRequestOpen} onUp={onRequestOpen}>
        <StyledSelectDropButton
          ref={ref}
          id={id}
          disabled={disabled === true || undefined}
          dropAlign={dropAlign}
          dropTarget={dropTarget}
          open={open}
          alignSelf={alignSelf}
          focusIndicator={focusIndicator}
          gridArea={gridArea}
          margin={margin}
          onOpen={onRequestOpen}
          onClose={onRequestClose}
          dropContent={
            <SelectContainer
              disabled={disabled}
              disabledKey={disabledKey}
              dropHeight={dropHeight}
              emptySearchMessage={emptySearchMessage}
              id={id}
              labelKey={labelKey}
              multiple={multiple}
              name={name}
              onChange={onSelectChange}
              onKeyDown={onKeyDown}
              onMore={onMore}
              onSearch={onSearch}
              options={options}
              replace={replace}
              searchPlaceholder={searchPlaceholder}
              selected={selected}
              theme={theme}
              value={value}
              valueKey={valueKey}
            >
              {children}
            </SelectContainer>
          }
          plain={plain}
          dropProps={dropProps}
          theme={theme}
        >
          <Box
            align="center"
            direction="row"
            justify="between"
            background={theme.select.background}
          >
            <Box direction="row" flex basis="auto">
              {selectValue || (
                <SelectTextInput
                  a11yTitle={
                    a11yTitle &&
                    `${a11yTitle}${
                      typeof value === 'string' ? `, ${value}` : ''
                    }`
                  }
                  id={id ? `${id}__input` : undefined}
                  name={name}
                  ref={inputRef}
                  {...rest}
                  tabIndex="-1"
                  type="text"
                  placeholder={placeholder}
                  plain
                  readOnly
                  value={inputValue}
                  size={size}
                  theme={theme}
                  onClick={disabled === true ? undefined : onRequestOpen}
                />
              )}
            </Box>
            {SelectIcon && (
              <Box
                margin={theme.select.icons.margin}
                flex={false}
                style={{ minWidth: 'auto' }}
              >
                {isValidElement(SelectIcon) ? (
                  SelectIcon
                ) : (
                  <SelectIcon color={iconColor} size={size} />
                )}
              </Box>
            )}
          </Box>
        </StyledSelectDropButton>
      </Keyboard>
    );
  },
);

Select.displayName = 'Select';

let SelectDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  SelectDoc = require('./doc').doc(Select);
}
const SelectWrapper = SelectDoc || Select;

export { SelectWrapper as Select };
