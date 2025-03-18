import { TFormValuesProps } from 'components/forms/CreatePersonForm';

// This file contains the validation functions for the form fields.
export const regex = {
  ukrainian: /^(?:[А-Яа-яЇїІіЄєҐґ]+[0-9А-Яа-яЇїІіЄєҐґ\s'’`"-.]*|\d+([.,]?\d+)*)$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  phone: /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
  date: /^\d{2}\.\d{2}\.\d{4}$/,
  passport: /^[А-Яа-яЇїІіЄєҐґ]{2}\d{6}$/,
  document: /^[А-Яа-яЇїІіЄєҐґ]{3}\d{5,9}$/,
  recordNo: /^\d{8}-\d{5}$/,
};

// Error messages for the form fields
export const errorMessages = {
  required: "Поле обов'язкове",
  minLength: 'Мінімум 6 символів',
  invalidEmail: 'Некоректний email. Приклад: example@example.com',
  invalidPhone: 'Некоректний номер телефону. Приклад: +38 (093) 999-88-77',
  invalidDate: 'Некоректна дата. Приклад: 13.12.1971',
  invalidPassport: 'Некоректний формат документу. Приклад: АБ12345',
  invalidDocument: 'Некоректний формат документу. Приклад: АБВ123456',
  invalidRecordNumber: 'Некоректний формат. Приклад: РРРРММДД-ХХХХХ',
  minLetters: 'Мінімум 2 літери',
  selectValue: 'Оберіть значення',
};

// A utility for checking a value by a regular expression
const validateFieldWithRegex = (
  value: string | undefined,
  regex: RegExp,
  errorMessage: string,
): string | undefined => {
  if (value && !regex.test(value)) {
    return errorMessage;
  }
  return undefined;
};

// Validate cases for text fields
export const validateTextField = (
  field: keyof TFormValuesProps,
  value: string | undefined,
  values: TFormValuesProps,
) => {
  if (!value) return errorMessages.required;

  switch (field) {
    case 'secretWord':
      if (value.length < 6) return errorMessages.minLength;
      break;

    case 'email':
      return validateFieldWithRegex(value, regex.email, errorMessages.invalidEmail);

    case 'phone':
      return validateFieldWithRegex(value, regex.phone, errorMessages.invalidPhone);

    case 'birthDate':
    case 'issueDate':
      return validateFieldWithRegex(value, regex.date, errorMessages.invalidDate);

    case 'passportNumber':
      if (values.documentType === 'passportBook') {
        return validateFieldWithRegex(value, regex.passport, errorMessages.invalidPassport);
      } else {
        return validateFieldWithRegex(value, regex.document, errorMessages.invalidDocument);
      }

    default:
      if (value.length < 2) return errorMessages.minLetters;
  }

  return undefined;
};

export const validateOptionalField = (
  field: keyof TFormValuesProps,
  value: string | undefined,
  values: TFormValuesProps,
) => {
  switch (field) {
    case 'contactType':
      if (values.contactType === field && !value) {
        return errorMessages.required;
      }
      break;

    case 'email':
      if (values.contactType === field && !value) {
        return errorMessages.required;
      }
      return validateFieldWithRegex(value, regex.email, errorMessages.invalidEmail);

    case 'phone':
      if (values.contactType === field && !value) {
        return errorMessages.required;
      }
      return validateFieldWithRegex(value, regex.phone, errorMessages.invalidPhone);

    case 'recordNumber':
      return validateFieldWithRegex(value, regex.recordNo, errorMessages.invalidRecordNumber);

    default:
      if (values.contactType === field && !value) {
        return errorMessages.required;
      }
  }

  return undefined;
};

export const validateSelectField = (field: keyof TFormValuesProps, value: string | undefined) => {
  if (!value || value === '-- Вибрати --') {
    return errorMessages.selectValue;
  }
  return undefined;
};

export const validateFields = (
  fields: (keyof TFormValuesProps)[],
  values: TFormValuesProps,
  validFunc: (
    field: keyof TFormValuesProps,
    value: string | undefined,
    values: TFormValuesProps,
  ) => string | undefined,
) => {
  const errors: Partial<Record<keyof TFormValuesProps, string>> = {};
  fields.forEach((field) => {
    const error = validFunc(field, values[field], values);
    if (error) errors[field] = error;
  });

  return errors;
};
