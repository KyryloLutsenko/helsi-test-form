import { useEffect } from 'react';
import { FieldInputProps } from 'react-final-form';

export const useHandleInputChange = (
  isEnabled: boolean,
  input: FieldInputProps<string>,
  alternativeLabel?: string,
) => {
  useEffect(() => {
    if (!isEnabled) {
      input.onChange(alternativeLabel);
    } else {
      input.value === alternativeLabel ? input.onChange('') : input.onChange(input.value);
    }
  }, [isEnabled, input, alternativeLabel]);
};
