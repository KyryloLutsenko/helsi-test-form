import { TFormValuesProps } from 'components/forms/CreatePersonForm';

// -- CreatePersonForm fields --
export const textFields: (keyof TFormValuesProps)[] = [
  'surname',
  'name',
  'patronymic',
  'tin',
  'birthDate',
  'birthCountry',
  'birthPlace',
  'secretWord',
  'issuedBy',
  'passportNumber',
  'issueDate',
];

export const selectFields: (keyof TFormValuesProps)[] = ['gender', 'contactType', 'documentType'];

export const optionalFields: (keyof TFormValuesProps)[] = [
  'phone',
  'email',
  'validUntil',
  'recordNumber',
];
