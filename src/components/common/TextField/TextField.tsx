import React, { useState, useEffect } from 'react';
import { Field } from 'react-final-form';
import Grid from '@mui/material/Grid2';
import { InputAdornment } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import ToggleSwitch from 'components/common/ToggleSwitch';

import { getHelperText, getShrinkValue, isError } from 'utils/textField';
import { useHandleInputChange } from 'hooks/textField';

import { StyledTextField, StyledTextFieldBlock } from './TextField.styles';

import { TTextFieldProps } from '.';

const TextField: React.FC<TTextFieldProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  variant = 'standard',
  hasToogle,
  gridSize,
  alternativeLabel,
  additionalHelperText,
  ...props
}) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <Grid size={gridSize}>
      <StyledTextFieldBlock>
        <Field name={name} subscription={{ value: true, error: true, touched: true }}>
          {({ input, meta }) => {
            useHandleInputChange(isEnabled, input, alternativeLabel);

            const helperText = getHelperText(meta, isEnabled, hasToogle, additionalHelperText);
            const error = isError(meta, isEnabled, hasToogle);
            const shrink = getShrinkValue(meta, isEnabled, hasToogle, input.value, props.focused);

            return (
              <StyledTextField
                {...input}
                label={isEnabled ? label : alternativeLabel}
                type={type}
                fullWidth
                error={error}
                helperText={helperText}
                $isError={error}
                variant={variant}
                multiline={props.multiline}
                minRows={props.minRows}
                maxRows={props.maxRows}
                slotProps={{
                  inputLabel: {
                    shrink: shrink,
                  },
                  input: {
                    endAdornment:
                      meta.touched && meta.error && !hasToogle ? (
                        <InputAdornment position="end">
                          <ErrorOutlineIcon color="error" fontSize="small" />
                        </InputAdornment>
                      ) : null,
                  },
                }}
                inputProps={{
                  maxLength: 28,
                }}
                disabled={!isEnabled}
                placeholder={placeholder}
                value={isEnabled ? input.value : alternativeLabel}
                $isEnabled={isEnabled}
                $isMultiline={props.multiline}
              />
            );
          }}
        </Field>
        {hasToogle && (
          <ToggleSwitch name={`${name}Check`} isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
        )}
      </StyledTextFieldBlock>
    </Grid>
  );
};

export default TextField;
