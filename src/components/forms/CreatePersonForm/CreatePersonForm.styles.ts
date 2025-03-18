import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});

export const FormActionsBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginTop: '1rem',
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '1rem',
  },
}));
