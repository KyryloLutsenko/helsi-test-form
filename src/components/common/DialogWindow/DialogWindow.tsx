import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { DialogTitle, DialogContent, IconButton, useMediaQuery, Theme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { urlPaths } from 'constants/urlPaths';

import { StyledDialog, StyledIconButton } from './DialogWindow.styles';

import { TDialogWindowProps } from '.';

const DialogWindow: React.FC<TDialogWindowProps> = ({
  isDialogOpen,
  title,
  fullWidth,
  maxWidth,
  children,
}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleCloseDialog = () => {
    navigate(urlPaths.mainPage);
  };

  return (
    <StyledDialog
      onClose={handleCloseDialog}
      aria-labelledby="customized-dialog-title"
      open={isDialogOpen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      fullScreen={isMobile}>
      <DialogTitle id="customized-dialog-title">{title}</DialogTitle>
      <StyledIconButton aria-label="close" onClick={handleCloseDialog}>
        <ArrowBack />
      </StyledIconButton>
      <DialogContent>{children}</DialogContent>
    </StyledDialog>
  );
};

export default DialogWindow;
