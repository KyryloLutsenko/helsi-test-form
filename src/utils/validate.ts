export const validate = (values: any) => {
  const errors: any = {};

  if (!values.name) errors.name = 'Поле не може бути пустим';
  if (!values.surname) errors.surname = 'Поле не може бути пустим';

  return errors;
};
