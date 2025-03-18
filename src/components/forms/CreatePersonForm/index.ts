export { default } from './CreatePersonForm';

export type TFormValuesProps = {
  surname: string;
  name: string;
  patronymic?: string;
  tin?: string;
  birthDate: string;
  gender: string;
  birthCountry: string;
  birthPlace: string;
  contactType?: string;
  secretWord: string;
  phone?: string;
  email?: string;
  documentType: string;
  passportNumber: string;
  issueDate: string;
  validUntil?: string;
  issuedBy: string;
  recordNumber?: string;
};
