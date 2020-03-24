import React, {
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { AnnounceContext } from '../../contexts';
import { defaultProps } from '../../default-props';
import {
  isNodeAfterScroll,
  isNodeBeforeScroll,
  PlaceHolderType,
  sizeStyle,
} from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Drop, DropProps } from '../Drop';
import { FormContext } from '../Form/FormContext';
import { InfiniteScroll } from '../InfiniteScroll';
import { InputIntrinsicProps } from '../intrinsic-elements';
import { Keyboard } from '../Keyboard';
import {
  StyledIcon,
  StyledPlaceholder,
  StyledSuggestions,
  StyledTextInput,
  StyledTextInputContainer,
} from './StyledTextInput';

const renderLabel = suggestion => {
  if (suggestion && typeof suggestion === 'object') {
    return suggestion.label || suggestion.value;
  }
  return suggestion;
};

const stringLabel = suggestion => {
  if (suggestion && typeof suggestion === 'object') {
    if (suggestion.label && typeof suggestion.label === 'string') {
      return suggestion.label;
    }
    return suggestion.value;
  }
  return suggestion;
};

const ContainerBox = styled(Box)`
  ${props =>
    props.dropHeight
      ? sizeStyle('max-height', props.dropHeight, props.theme)
      : 'max-height: inherit;'};

  /* IE11 hack to get drop contents to not overflow */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: 100%;
  }
`;

export interface TextInputProps
  extends Omit<InputIntrinsicProps, 'onSelect' | 'size' | 'placeholder'> {
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
  icon?: JSX.Element;
  id?: string;
  messages?: Record<string, string> & {
    enterSelect?: string;
    suggestionsCount?: string;
    suggestionsExist?: string;
    suggestionIsOpen?: string;
  };
  name?: string;
  onSelect?: (x: {
    target: React.RefObject<HTMLElement>['current'];
    suggestion: any;
  }) => void;
  onSuggestionsOpen?: (...args: any[]) => any;
  onSuggestionsClose?: (...args: any[]) => any;
  placeholder?: PlaceHolderType;
  plain?: boolean;
  reverse?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | string;
  suggestions?: ({ label?: React.ReactNode; value?: any } | string)[];
  value?: string | number;
}

const TextInput = forwardRef(
  (
    {
      defaultValue,
      dropAlign = { top: 'bottom', left: 'left' },
      dropHeight,
      dropTarget,
      dropProps,
      icon,
      id,
      messages = {
        enterSelect: '(Press Enter to Select)',
        suggestionsCount: 'suggestions available',
        suggestionsExist:
          'This input has suggestions use arrow keys to navigate',
        suggestionIsOpen:
          'Suggestions drop is open, continue to use arrow keys to navigate',
      },
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onSelect,
      onSuggestionsClose,
      onSuggestionsOpen,
      placeholder,
      plain,
      reverse,
      suggestions,
      value: valueProp,
      ...rest
    }: TextInputProps,
    ref: any,
  ) => {
    const theme = useContext(ThemeContext) || defaultProps.theme;
    const announce = useContext(AnnounceContext);
    const formContext = useContext(FormContext);
    const inputRef = useRef<any>();
    const dropRef = useRef<any>();
    const suggestionsRef = useRef<any>();
    const suggestionRefs = {};

    const [value, setValue] = formContext.useFormContext(name, valueProp);

    const [focus, setFocus] = useState<any>();
    const [showDrop, setShowDrop] = useState<any>();

    // if we have no suggestions, close drop if it's open
    useEffect(() => {
      if (showDrop && (!suggestions || !suggestions.length)) {
        setShowDrop(false);
        if (onSuggestionsClose) onSuggestionsClose();
      }
    }, [onSuggestionsClose, showDrop, suggestions]);

    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<any>(-1);

    // reset activeSuggestionIndex when the drop is closed
    useEffect(() => {
      if (activeSuggestionIndex !== -1 && !showDrop) {
        setActiveSuggestionIndex(-1);
      }
    }, [activeSuggestionIndex, showDrop]);

    // announce active suggestion
    useEffect(() => {
      if (activeSuggestionIndex >= 0) {
        const label = stringLabel(suggestions![activeSuggestionIndex]);
        announce(`${label} ${messages.enterSelect}`);
      }
    }, [activeSuggestionIndex, announce, messages, suggestions]);

    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<any>(
      -1,
    );

    // set selectedSuggestionIndex based on value and current suggestions
    useEffect(() => {
      if (suggestions) {
        const suggestionValues = suggestions.map(suggestion =>
          typeof suggestion === 'object' ? suggestion.value : suggestion,
        );
        setSelectedSuggestionIndex(suggestionValues.indexOf(value));
      } else setSelectedSuggestionIndex(-1);
    }, [suggestions, value]);

    // make sure activeSuggestion remains visible in scroll
    useEffect(() => {
      const buttonNode = suggestionRefs[activeSuggestionIndex];
      const optionsNode = suggestionsRef.current;
      if (
        buttonNode &&
        isNodeAfterScroll(buttonNode, optionsNode) &&
        optionsNode.scrollTo
      ) {
        optionsNode.scrollTo(
          0,
          buttonNode.offsetTop -
            (optionsNode.getBoundingClientRect().height -
              buttonNode.getBoundingClientRect().height),
        );
      }
      if (
        buttonNode &&
        isNodeBeforeScroll(buttonNode, optionsNode) &&
        optionsNode.scrollTo
      ) {
        optionsNode.scrollTo(0, buttonNode.offsetTop);
      }
    }, [activeSuggestionIndex, suggestionRefs]);

    const openDrop = () => {
      setShowDrop(true);
      announce(messages.suggestionIsOpen);
      announce(`${suggestions!.length} ${messages.suggestionsCount}`);
      if (onSuggestionsOpen) onSuggestionsOpen();
    };

    const closeDrop = () => {
      setShowDrop(false);
      // if (messages!.onSuggestionsClose) onSuggestionsClose();
      if (onSuggestionsClose) onSuggestionsClose();
    };

    const onNextSuggestion = event => {
      event.preventDefault();
      const nextActiveIndex = Math.min(
        activeSuggestionIndex + 1,
        suggestions!.length - 1,
      );
      setActiveSuggestionIndex(nextActiveIndex);
    };

    const onPreviousSuggestion = event => {
      event.preventDefault();
      const nextActiveIndex = Math.max(activeSuggestionIndex - 1, 0);
      setActiveSuggestionIndex(nextActiveIndex);
    };

    const showStyledPlaceholder =
      placeholder && typeof placeholder !== 'string' && !value;

    let drop;
    if (showDrop) {
      drop = (
        // keyboard access needed here in case user clicks
        // and drags on scroll bar and focus shifts to drop
        <Keyboard
          onDown={event => onNextSuggestion(event)}
          onUp={event => onPreviousSuggestion(event)}
          onEnter={event => {
            // we stole the focus, give it back
            (ref || inputRef).current.focus();
            closeDrop();
            if (onSelect) {
              const adjustedEvent = event;
              adjustedEvent.suggestion = suggestions![activeSuggestionIndex];
              onSelect(adjustedEvent);
            }
            setValue(suggestions![activeSuggestionIndex]);
          }}
        >
          <Drop
            ref={dropRef}
            id={id ? `text-input-drop__${id}` : undefined}
            align={dropAlign}
            responsive={false}
            target={dropTarget || (ref || inputRef).current}
            onClickOutside={closeDrop}
            onEsc={closeDrop}
            {...dropProps}
          >
            <ContainerBox
              ref={suggestionsRef}
              overflow="auto"
              dropHeight={dropHeight}
            >
              <StyledSuggestions>
                <InfiniteScroll items={suggestions} step={theme.select.step}>
                  {(suggestion, index) => {
                    const plainLabel =
                      typeof suggestion === 'object' &&
                      typeof isValidElement(suggestion.label);
                    return (
                      <li key={`${stringLabel(suggestion)}-${index}`}>
                        <Button
                          active={
                            activeSuggestionIndex === index ||
                            selectedSuggestionIndex === index
                          }
                          ref={r => {
                            suggestionRefs[index] = r;
                          }}
                          fill
                          hoverIndicator="background"
                          onClick={event => {
                            // we stole the focus, give it back
                            (ref || inputRef).current.focus();
                            closeDrop();
                            if (onSelect) {
                              event.persist();
                              const adjustedEvent = event;
                              adjustedEvent.suggestion = suggestion;
                              adjustedEvent.target = (ref || inputRef).current;
                              onSelect(adjustedEvent);
                            }
                            setValue(suggestion);
                          }}
                          onMouseOver={() => setActiveSuggestionIndex(index)}
                          onFocus={() => setActiveSuggestionIndex(index)}
                        >
                          {plainLabel ? (
                            renderLabel(suggestion)
                          ) : (
                            <Box align="start" pad="small">
                              {renderLabel(suggestion)}
                            </Box>
                          )}
                        </Button>
                      </li>
                    );
                  }}
                </InfiniteScroll>
              </StyledSuggestions>
            </ContainerBox>
          </Drop>
        </Keyboard>
      );
    }

    return (
      <StyledTextInputContainer plain={plain}>
        {showStyledPlaceholder && (
          <StyledPlaceholder>{placeholder}</StyledPlaceholder>
        )}
        {icon && (
          <StyledIcon reverse={reverse} theme={theme}>
            {icon}
          </StyledIcon>
        )}
        <Keyboard
          onEnter={event => {
            closeDrop();
            if (activeSuggestionIndex >= 0 && onSelect) {
              // prevent submitting forms when choosing a suggestion
              event.preventDefault();
              event.persist();
              const adjustedEvent = event;
              adjustedEvent.suggestion = suggestions![activeSuggestionIndex];
              adjustedEvent.target = (ref || inputRef).current;
              onSelect(adjustedEvent);
            }
          }}
          onEsc={
            showDrop
              ? event => {
                  closeDrop();
                  // we have to stop both synthetic events and native events
                  // drop and layer should not close by pressing esc on this
                  // input
                  event.stopPropagation();
                  event.nativeEvent.stopImmediatePropagation();
                }
              : undefined
          }
          onTab={showDrop ? closeDrop : undefined}
          onUp={
            showDrop &&
            suggestions &&
            suggestions.length > 0 &&
            activeSuggestionIndex
              ? event => {
                  onPreviousSuggestion(event);
                }
              : undefined
          }
          onDown={
            suggestions && suggestions.length > 0
              ? event => {
                  if (!showDrop) {
                    openDrop();
                  } else {
                    onNextSuggestion(event);
                  }
                }
              : undefined
          }
          onKeyDown={onKeyDown}
        >
          <StyledTextInput
            ref={ref || inputRef}
            id={id}
            name={name}
            autoComplete="off"
            plain={plain}
            placeholder={
              typeof placeholder === 'string' ? placeholder : undefined
            }
            icon={icon}
            reverse={reverse}
            focus={focus}
            {...rest}
            defaultValue={renderLabel(defaultValue)}
            value={renderLabel(value) || ''}
            onFocus={event => {
              setFocus(true);
              if (suggestions && suggestions.length > 0) {
                announce(messages.suggestionsExist);
                openDrop();
              }
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
          />
        </Keyboard>
        {drop}
      </StyledTextInputContainer>
    );
  },
);

TextInput.displayName = 'TextInput';

let TextInputDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  TextInputDoc = require('./doc').doc(TextInput);
}
const TextInputWrapper = TextInputDoc || TextInput;

export { TextInputWrapper as TextInput };
