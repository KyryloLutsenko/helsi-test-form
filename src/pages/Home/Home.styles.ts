import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: '1rem',
}));
