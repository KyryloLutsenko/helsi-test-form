import { Select as MuiSelect, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '0.875rem',
  },

  '& .MuiInput-input': {
    padding: '3px',
  },
}));

export const StyledSelectField = styled(MuiSelect)(({ theme }) => ({
  '& .MuiInput-input': {
    fontSize: '0.875rem',
  },
}));
