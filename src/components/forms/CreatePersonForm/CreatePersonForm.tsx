import React from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

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
import { urlPaths } from 'constants/urlPaths';

import theme from 'styles/theme';
import { TFormValuesProps } from '.';

const CreatePersonForm: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = (values: TFormValuesProps) => {
    console.log('Form Data:', values);
    navigate(urlPaths.mainPage);
    alert('Форма успішно відправлена!');
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
      // validate={validate}
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
