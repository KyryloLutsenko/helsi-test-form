import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { IconButton } from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  '& .MuiDialog-container': {
    width: '100%',
  },

  '& .MuiDialogTitle-root': {
    ...theme.typography.h6,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: '1rem 1rem 1rem 3.5rem',
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  left: '8px',
  top: '14px',
  color: theme.palette.common.white,
  cursor: 'pointer',

  '& .MuiSvgIcon-root': {
    width: '1.25rem',
    height: '1.25rem',
  },
}));
