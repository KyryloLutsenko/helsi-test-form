import React, { useState, useEffect } from 'react';
import { Field } from 'react-final-form';
import Grid from '@mui/material/Grid2';
import { InputAdornment } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import ToggleSwitch from 'components/common/ToggleSwitch';

import { StyledTextField, StyledTextFieldBlock } from './TextField.styles';

import { TTextFieldProps } from '.';
import { useHandleInputChange } from 'hooks/textField';

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

  const getHelperText = (
    meta: any,
    isEnabled: boolean,
    hasToogle?: boolean,
    additionalHelperText?: string,
  ) => {
    if ((meta.touched && !!meta.error && isEnabled) || (hasToogle && isEnabled)) {
      return meta.touched && meta.error;
    }
    return additionalHelperText;
  };

  const isError = (meta: any, isEnabled: boolean, hasToogle?: boolean) => {
    return meta.touched && !!meta.error && isEnabled;
  };

  return (
    <Grid size={gridSize}>
      <StyledTextFieldBlock>
        <Field name={name} subscription={{ value: true, error: true, touched: true }}>
          {({ input, meta }) => {
            useHandleInputChange(isEnabled, input, alternativeLabel);

            const helperText = getHelperText(meta, isEnabled, hasToogle, additionalHelperText);
            const error = isError(meta, isEnabled, hasToogle);
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
                    shrink:
                      (meta.error && meta.touched && !hasToogle) ||
                      (hasToogle && isEnabled) ||
                      !!props.value ||
                      props.focused,
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
