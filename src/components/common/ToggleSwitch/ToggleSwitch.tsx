import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { Field } from 'react-final-form';

import { StyledSwitch } from './ToggleSwitch.styles';

import { TToggleSwitchProps } from '.';

const ToggleSwitch: React.FC<TToggleSwitchProps> = ({ name, isEnabled, setIsEnabled }) => {
  return (
    <Field name={name} type="checkbox">
      {({ input }) => (
        <StyledSwitch
          {...input}
          checked={isEnabled}
          onChange={() => setIsEnabled(!isEnabled)}
          color="default"
        />
      )}
    </Field>
  );
};

export default ToggleSwitch;
