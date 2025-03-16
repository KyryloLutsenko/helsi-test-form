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
})<{ $isEnabled: boolean; $isError: boolean }>(({ theme, $isEnabled, $isError }) => ({
  position: 'relative',

  '& .MuiInputBase-root': {
    fontSize: '0.875rem',
  },

  '& .MuiFormLabel-root': {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '0.875rem',
  },

  '& .MuiInputLabel-root': {
    color: $isEnabled ? theme.palette.text.secondary : '#606060',

    '&.Mui-error': {
      color: theme.palette.text.secondary,
    },
  },

  '& .MuiFormHelperText-root': {
    position: 'absolute',
    top: '3rem',
    right: $isError ? '0' : 'auto',
    left: $isError ? 'auto' : '0',
    fontSize: '0.75rem',
    fontWeight: !$isError && theme.typography.fontWeightBold,
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
}));
