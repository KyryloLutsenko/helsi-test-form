import { Switch as MuiSwitch } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSwitch = styled(MuiSwitch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      transform: 'translateX(1.75rem)',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.background.default,
        borderColor: '#9E9E9E',
      },

      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.background.default,
        borderColor: '#9E9E9E',
      },
    },
  },

  '& .MuiSwitch-thumb': {
    width: 20,
    height: 20,
    boxShadow: 'none',
    border: '1px solid #9E9E9E',
    backgroundColor: '#9E9E9E',
  },

  '& .MuiSwitch-track': {
    backgroundColor: '#999',
    minWidth: '2.5rem',
    border: '1px solid #C9C9C9',
  },
}));
