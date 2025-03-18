import React from 'react';
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
import { TFormValuesProps } from './index';

const CreatePersonForm: React.FC = () => {
  const onSubmit = (values: TFormValuesProps) => {
    console.log('Form Data:', values);
  };

  const validate = (values: TFormValuesProps) => {
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
            <Button onClick={handleSubmit} fullWidthMob>
              Створити
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                form.restart();
              }}
              variant="text"
              background={theme.palette.error.main}
              fullWidthMob>
              Очистити форму
            </Button>
          </FormActionsBlock>
        </FormContainer>
      )}
    />
  );
};

export default CreatePersonForm;
