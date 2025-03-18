import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import DialogWindow from 'components/common/DialogWindow';
import CreatePersonForm from 'components/forms/CreatePersonForm';

import { urlPaths } from 'constants/urlPaths';

import { StyledContainer } from './Home.styles';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCreatePersonFormDialogOpen = location.pathname === urlPaths.createPersonForm;

  const handleOpenCreatePersonDialog = () => {
    navigate(urlPaths.createPersonForm);
  };

  return (
    <StyledContainer>
      <Typography variant="h6">Тестове завдання для Helsi</Typography>
      <Button variant="contained" color="primary" onClick={handleOpenCreatePersonDialog}>
        Створити персону
      </Button>
      <DialogWindow
        isDialogOpen={isCreatePersonFormDialogOpen}
        title="Створення персони"
        fullWidth
        maxWidth="lg">
        <CreatePersonForm />
      </DialogWindow>
    </StyledContainer>
  );
};

export default Home;
