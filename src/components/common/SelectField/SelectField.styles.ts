import { Padding } from '@mui/icons-material';
import { Select as MuiSelect, FormControl, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '0.875rem',
  },
}));

export const StyledSelectField = styled(MuiSelect)(() => ({
  position: 'relative',
  fontSize: '0.875rem',
  height: '2.25rem',

  '& .MuiInputBase-root': {
    minHeight: '2.25rem',
    fontSize: '0.875rem',
  },
}));

export const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  position: 'absolute',
  top: '3.5rem',
  left: '0',
  fontSize: '0.75rem',
  margin: 0,
}));
