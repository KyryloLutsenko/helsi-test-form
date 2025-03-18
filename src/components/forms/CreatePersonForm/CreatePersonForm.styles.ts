import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});

export const FormActionsBlock = styled(Box)({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-end',
  marginTop: '1rem',
  width: '100%',
});
