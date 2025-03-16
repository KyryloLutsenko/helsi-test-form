import React from 'react';
import { InputLabel, MenuItem } from '@mui/material';
import { Field } from 'react-final-form';
import Grid from '@mui/material/Grid2';

import { StyledSelectField, StyledFormControl } from './SelectField.styles';

import { TSelectFieldProps } from '.';

const SelectField: React.FC<TSelectFieldProps> = ({
  name,
  label,
  options,
  variant = 'standard',
  gridSize,
}) => {
  return (
    <Grid size={gridSize}>
      <Field name={name}>
        {({ input, meta }) => (
          <StyledFormControl fullWidth error={meta.touched && !!meta.error}>
            <InputLabel variant={variant} htmlFor={name} shrink>
              {label}
            </InputLabel>
            <StyledSelectField
              {...input}
              variant={variant}
              value={input.value || options[0].value}
              onChange={input.onChange}>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelectField>
          </StyledFormControl>
        )}
      </Field>
    </Grid>
  );
};

export default SelectField;
