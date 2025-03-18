import { Padding } from '@mui/icons-material';
import { Box, TextField as MuiTextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextFieldBlock = styled(Box)({
  position: 'relative',

  '.MuiSwitch-root': {
    position: 'absolute',
    right: '0',
    bottom: '0.25rem',
  },
});

export const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop: string) => !prop.startsWith('$'),
})<{ $isEnabled: boolean; $isError?: boolean; $isMultiline?: boolean }>(
  ({ theme, $isEnabled, $isError, $isMultiline }) => ({
    position: 'relative',

    '& .MuiInputBase-root': {
      minHeight: '2.25rem',
      fontSize: '0.875rem',

      '& .Mui-disabled': {
        WebkitTextFillColor: '#606060',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '1rem',
      },
    },

    '& .MuiFormLabel-root': {
      opacity: $isEnabled ? '1' : '0',
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightBold,
    },

    '& .MuiInputLabel-root': {
      color: $isEnabled ? theme.palette.text.secondary : '#606060',
      fontSize: '0.875rem',

      '&.Mui-error': {
        color: theme.palette.text.secondary,
      },
    },

    '& .MuiFormHelperText-root': {
      position: 'absolute',
      top: $isMultiline ? '4rem' : '3.375rem',
      right: $isError ? '0' : 'auto',
      left: $isError ? 'auto' : '0',
      fontSize: '0.75rem',
      fontWeight: !$isError && theme.typography.fontWeightBold,
      color: !$isError ? theme.palette.text.secondary : theme.palette.error.main,
    },

    '& .MuiInputBase-input': {
      '&::placeholder': {
        color: theme.palette.text.secondary,
        opacity: '0.5',
      },
    },

    '& .MuiSvgIcon-root': {
      width: '1.25rem',
    },
  }),
);
