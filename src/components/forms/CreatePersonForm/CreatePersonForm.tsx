import React, { useState } from 'react';
import { Form } from 'react-final-form';

import PatientInfoForm from 'components/forms/PatientInfoForm';
import DocumentForm from 'components/forms/DocumentForm';

import { FormActionsBlock, FormContainer } from './CreatePersonForm.styles';
import Button from 'components/common/Button';

import { optionalFields, selectFields, textFields } from 'constants/validationGroups';
import {
  validateFields,
  validateOptionalField,
  validateSelectField,
  validateTextField,
} from 'utils/validation';

import theme from 'styles/theme';

const CreatePersonForm: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log('Form Data:', values);
  };

  const validate = (values: any) => {
    return {
      ...validateFields(textFields, values, validateTextField),
      ...validateFields(selectFields, values, validateSelectField),
      ...validateFields(optionalFields, values, validateOptionalField),
    };
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form }) => (
        <FormContainer>
          <PatientInfoForm />
          <DocumentForm />
          <FormActionsBlock>
            <Button onClick={handleSubmit}>Створити</Button>
            <Button onClick={form.restart} variant="text" background={theme.palette.error.main}>
              Очистити форму
            </Button>
          </FormActionsBlock>
        </FormContainer>
      )}
    />
  );
};

export default CreatePersonForm;
