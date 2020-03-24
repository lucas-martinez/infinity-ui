import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FormIntrinsicProps } from '../intrinsic-elements';
import { FormContext } from './FormContext';

const defaultMessages = {
  invalid: 'invalid',
  required: 'required',
};
const defaultValue = {};
const defaultErrors = {};
const defaultInfos = {};

const updateErrors = (nextErrors, name, error) => {
  // we disable no-param-reassing so we can use this as a utility function
  // to update nextErrors, to avoid code duplication
  /* eslint-disable no-param-reassign */
  const hasStatusError = typeof error === 'object' && error.status === 'error';

  // typeof error === 'object' is implied for both cases of error with
  // a status message and for an error object that is a react node
  if (
    (typeof error === 'object' && !error.status) ||
    hasStatusError ||
    typeof error === 'string'
  ) {
    nextErrors[name] = hasStatusError ? error.message : error;
  } else {
    delete nextErrors[name];
  }
  /* eslint-enable no-param-reassign */
};

const updateInfos = (nextInfos, name, error) => {
  /* eslint-disable no-param-reassign */
  if (typeof error === 'object' && error.status === 'info') {
    nextInfos[name] = error.message;
  } else {
    delete nextInfos[name];
  }
  /* eslint-enable no-param-reassign */
};

export interface FormProps {
  errors?: {};
  infos?: {};
  messages?: { invalid?: string; required?: string };
  onChange?: (event: React.ChangeEvent) => void;
  onSubmit?: (event: React.FormEvent) => void;
  onReset?: (event: React.SyntheticEvent) => any;
  validate?: 'blur' | 'submit';
  value?: {};
}

const Form = forwardRef<HTMLFormElement, FormProps & FormIntrinsicProps>(
  (
    {
      children,
      errors: errorsProp = defaultErrors,
      infos: infosProp = defaultInfos,
      messages: messagesProp = defaultMessages,
      onChange,
      onReset,
      onSubmit,
      validate = 'submit',
      value: valueProp = defaultValue,
      ...rest
    },
    ref: any,
  ) => {
    const [value, setValue] = useState<any>(valueProp);
    useEffect(() => {
      if (valueProp !== defaultValue) setValue(valueProp);
    }, [valueProp]);
    const [messages, setMessages] = useState<any>(messagesProp);
    useEffect(() => setMessages(messagesProp), [messagesProp]);
    const [errors, setErrors] = useState<any>(errorsProp || {});
    useEffect(() => setErrors(errorsProp || {}), [errorsProp]);
    const [infos, setInfos] = useState<any>(infosProp || {});
    useEffect(() => setInfos(infosProp || {}), [infosProp]);
    const [touched, setTouched] = useState<any>({});

    const validations = useRef<any>({});

    useEffect(() => {
      if (onChange) onChange(value);
    }, [onChange, value]);

    useEffect(() => {}, [value, errors, infos]);

    const update = useCallback((name, data, initial: any = undefined) => {
      setValue(prevValue => {
        const nextValue = { ...prevValue };
        nextValue[name] = data;

        // re-run any validations, in case the validation
        // is checking across fields
        setErrors(prevErrors => {
          const nextErrors = { ...prevErrors };
          Object.keys(prevErrors).forEach(errName => {
            if (validations.current[errName]) {
              const nextError = validations.current[errName](data, nextValue);
              updateErrors(nextErrors, errName, nextError);
            }
          });
          return nextErrors;
        });
        setInfos(prevInfos => {
          const nextInfos = { ...prevInfos };
          // re-run any validations that have infos, in case the validation
          // is checking across fields
          Object.keys(nextInfos).forEach(infoName => {
            if (validations.current[infoName]) {
              const nextInfo = validations.current[infoName](data, nextValue);
              updateInfos(nextInfos, infoName, nextInfo);
            }
          });
          return nextInfos;
        });

        return nextValue;
      });

      if (!initial)
        setTouched(prevTouched => {
          const nextTouched = { ...prevTouched };
          nextTouched[name] = true;
          return nextTouched;
        });
    }, []);

    const useFormContext = (name, componentValue) => {
      const valueData = name && value[name] !== undefined ? value[name] : '';
      const [data, setData] = useState<any>(
        componentValue !== undefined ? componentValue : valueData,
      );
      // update when the component value or form value changes
      useEffect(() => {
        if (componentValue !== undefined) {
          if (componentValue !== data) {
            setData(componentValue);
            if (name) update(name, componentValue);
          }
        } else if (name && valueData !== data) setData(valueData);
      }, [data, name, valueData, componentValue]);

      return [
        data,
        nextData => {
          // only set if the caller hasn't supplied a specific value
          if (componentValue === undefined) {
            if (name) update(name, nextData);
            setData(nextData);
          }
        },
      ];
    };

    return (
      <form
        ref={ref}
        {...rest}
        onReset={event => {
          setValue(defaultValue);
          setErrors({});
          setTouched({});
          if (onReset) {
            event.persist(); // extract from React's synthetic event pool
            const adjustedEvent = event;
            adjustedEvent.value = defaultValue;
            onReset(adjustedEvent);
          }
        }}
        onSubmit={event => {
          // Don't submit the form via browser form action. We don't want it
          // if the validation fails. And, we assume a javascript action handler
          // otherwise.
          event.preventDefault();
          const nextErrors = { ...errors };
          const nextInfos = { ...infos };
          Object.keys(validations.current).forEach(name => {
            const nextError = validations.current[name](value[name], value);
            updateErrors(nextErrors, name, nextError);
            updateInfos(nextInfos, name, nextError);
          });
          setErrors(nextErrors);
          setInfos(nextInfos);
          if (Object.keys(nextErrors).length === 0 && onSubmit) {
            event.persist(); // extract from React's synthetic event pool
            const adjustedEvent: any = event;
            adjustedEvent.value = value;
            adjustedEvent.touched = touched;
            onSubmit(adjustedEvent);
          }
        }}
      >
        <FormContext.Provider
          value={{
            addValidation: (name, validation) => {
              validations.current[name] = validation;
            },
            removeValidation: name => {
              delete validations.current[name];
            },
            onBlur:
              validate === 'blur'
                ? name => {
                    if (validations.current[name]) {
                      const error = validations.current[name](
                        value[name],
                        value,
                      );
                      setErrors(prevErrors => {
                        const nextErrors = { ...prevErrors };
                        updateErrors(nextErrors, name, error);
                        return nextErrors;
                      });
                      setInfos(prevInfos => {
                        const nextInfos = { ...prevInfos };
                        updateInfos(nextInfos, name, error);
                        return nextInfos;
                      });
                    }
                  }
                : undefined,
            errors,
            get: name => value[name],
            infos,
            messages,
            set: (name, nextValue) => update(name, nextValue),
            touched,
            update,
            useFormContext,
            value,
          }}
        >
          {children}
        </FormContext.Provider>
      </form>
    );
  },
);

Form.displayName = 'Form';

let FormDoc;
if (process.env.NODE_ENV !== 'production') {
  FormDoc = require('./doc').doc(Form); // eslint-disable-line global-require
}

const FormWrapper = FormDoc || Form;

export { FormWrapper as Form };
