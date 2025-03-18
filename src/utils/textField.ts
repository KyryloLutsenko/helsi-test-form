import { FieldMetaState } from 'react-final-form';

export const getHelperText = (
  meta: FieldMetaState<string>,
  isEnabled: boolean,
  hasToogle?: boolean,
  additionalHelperText?: string,
) => {
  if ((meta.touched && !!meta.error && isEnabled) || (hasToogle && isEnabled)) {
    return meta.touched && meta.error;
  }
  return additionalHelperText;
};

export const isError = (meta: FieldMetaState<string>, isEnabled: boolean, hasToogle?: boolean) => {
  return meta.touched && meta.error && isEnabled;
};

export const getShrinkValue = (
  meta: FieldMetaState<string>,
  isEnabled: boolean,
  hasToogle?: boolean,
  value?: string,
  focused?: boolean,
) => {
  return (
    (meta.error && meta.touched && !hasToogle) || (hasToogle && isEnabled) || !!value || focused
  );
};
