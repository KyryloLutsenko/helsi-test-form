import React, { useState } from 'react';
import { Field } from 'react-final-form';
import Grid from '@mui/material/Grid2';
import { InputAdornment } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import ToggleSwitch from 'components/common/ToggleSwitch';

import { StyledTextField, StyledTextFieldBlock } from './TextField.styles';

import { TTextFieldProps } from '.';

const TextField: React.FC<TTextFieldProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  variant = 'standard',
  hasToogle,
  validate,
  gridSize,
  alternativeLabel,
  additionalHelperText,
  ...props
}) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <Grid size={gridSize}>
      <StyledTextFieldBlock>
        <Field name={name} validate={validate}>
          {({ input, meta }) => (
            <StyledTextField
              {...input}
              label={isEnabled ? label : alternativeLabel}
              type={type}
              fullWidth
              error={meta.error && meta.touched}
              helperText={
                (meta.touched && !!meta.error) || (hasToogle && isEnabled)
                  ? meta.error
                  : additionalHelperText
              }
              $isError={meta.error && meta.touched}
              variant={variant}
              multiline={props.multiline}
              minRows={props.minRows}
              maxRows={props.maxRows}
              slotProps={{
                inputLabel: {
                  shrink:
                    (meta.error && meta.touched) ||
                    (hasToogle && isEnabled) ||
                    !!props.value ||
                    props.focused,
                },
                input: {
                  endAdornment:
                    meta.touched && meta.error ? (
                      <InputAdornment position="end">
                        <ErrorOutlineIcon color="error" fontSize="small" />
                      </InputAdornment>
                    ) : null,
                },
              }}
              disabled={!isEnabled}
              placeholder={placeholder}
              value={isEnabled ? input.value : ''}
              $isEnabled={isEnabled}
            />
          )}
        </Field>
        {hasToogle && (
          <ToggleSwitch name={`${name}Check`} isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
        )}
      </StyledTextFieldBlock>
    </Grid>
  );
};

export default TextField;
