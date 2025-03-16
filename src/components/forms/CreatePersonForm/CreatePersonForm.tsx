import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { Button, Container } from '@mui/material';

import SelectField from 'components/common/SelectField';
import ToggleSwitch from 'components/common/ToggleSwitch';
import TextField from 'components/common/TextField';

import { validate } from 'utils/validate';

import { FormContainer } from './CreatePersonForm.styles';
import PatientInfoForm from '../PatientInfoForm';
import DocumentForm from '../DocumentForm';

const CreatePersonForm: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log('Form Data:', values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <FormContainer>
          <PatientInfoForm />
          <DocumentForm />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Відправити
          </Button>
        </FormContainer>
      )}
    />
  );
};

export default CreatePersonForm;
