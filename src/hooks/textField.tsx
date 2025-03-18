import { useEffect } from 'react';

export const useHandleInputChange = (isEnabled: boolean, input: any, alternativeLabel?: string) => {
  useEffect(() => {
    if (!isEnabled) {
      input.onChange(alternativeLabel);
    } else {
      input.value === alternativeLabel ? input.onChange('') : input.onChange(input.value);
    }
  }, [isEnabled, input, alternativeLabel]);
};
