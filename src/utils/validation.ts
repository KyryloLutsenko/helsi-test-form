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

export const errorMessages = {
  required: "Поле обов'язкове",
  minLength: 'Мінімум 6 символів',
  invalidEmail: 'Некоректний email',
  invalidPhone: 'Некоректний номер телефону. Приклад: +38 (093) 999-88-77',
  invalidDate: 'Некоректна дата. Приклад: 13.12.1971',
  invalidPassport: 'Некоректний формат документу. Приклад: АБ12345',
  invalidDocument: 'Некоректний формат документу. Приклад: АБВ123456',
  invalidRecordNumber: 'Некоректний формат. Приклад: РРРРММДД-ХХХХХ',
  minLetters: 'Мінімум 2 літери',
  selectValue: 'Оберіть значення',
};

// Validate cases for text fields
export const validateTextField = (field: string, value: any, values: any) => {
  if (!value) return errorMessages.required;

  switch (field) {
    case 'secretWord':
      if (value.length < 6) return errorMessages.minLength;
      break;
    case 'email':
      if (!regex.email.test(value)) return errorMessages.invalidEmail;
      break;
    case 'phone':
      if (!regex.phone.test(value)) return errorMessages.invalidPhone;
      break;
    case 'birthDate':
    case 'issueDate':
      if (!regex.date.test(value)) return errorMessages.invalidDate;
      break;
    case 'passportNumber':
      if (values.documentType === 'passportBook' && !regex.passport.test(value)) {
        return errorMessages.invalidPassport;
      } else if (values.documentType !== 'passportBook' && !regex.document.test(value)) {
        return errorMessages.invalidDocument;
      }
      break;
    default:
      // If you need to fill out the form only in Ukrainian, please comment on the code below
      // if (!regex.ukrainian.test(value)) return 'Використовуйте державну будь-ласка:)';
      if (value.length < 2) return errorMessages.minLetters;
  }

  return undefined;
};

// Validate cases for optional fields
export const validateOptionalField = (field: string, value: any, values: any) => {
  switch (field) {
    case 'contactType':
      if (values.contactType === field && !value) {
        return errorMessages.required;
      }
      break;
    case 'email':
      if (values.contactType === field && !value) {
        return errorMessages.required;
      } else if (value) {
        const isValidEmail = regex.email.test(value);
        if (!isValidEmail) {
          return errorMessages.invalidEmail;
        }
      }
      break;

    case 'phone':
      if (values.contactType === field && !value) {
        return errorMessages.required;
      } else if (value) {
        const isValidPhone = regex.phone.test(value);
        if (!isValidPhone) {
          return errorMessages.invalidPhone;
        }
      }
      break;

    case 'recordNumber':
      if (value) {
        const isValidRecordNumber = regex.recordNo.test(value);
        if (!isValidRecordNumber) {
          return errorMessages.invalidRecordNumber;
        }
      }
      break;

    default:
      if (values.contactType === field && !value) {
        return errorMessages.required;
      }
  }

  return undefined;
};

// Validate cases for select fields
export const validateSelectField = (field: string, value: any) => {
  if (!value || value === '-- Вибрати --') {
    return errorMessages.selectValue;
  }
  return undefined;
};

// Universal function for validating any type of fields
export const validateFields = (fields: string[], values: any, validFunc: any) => {
  const errors: any = {};
  fields.forEach((field) => {
    const error = validFunc(field, values[field], values);
    if (error) errors[field] = error;
  });
  return errors;
};
