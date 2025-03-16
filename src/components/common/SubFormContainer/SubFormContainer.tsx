import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { StyledFormContainer } from './SubFormContainer.styles';

import { TSubFormContainerProps } from '.';

const SubFormContainer: React.FC<TSubFormContainerProps> = ({ title, children }) => {
  return (
    <StyledFormContainer>
      <Typography variant="h3">{title}</Typography>
      <Grid container rowSpacing={3.5} columnSpacing={2.5}>
        {children}
      </Grid>
    </StyledFormContainer>
  );
};

export default SubFormContainer;
