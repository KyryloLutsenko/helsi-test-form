import { TextFieldVariants, TextFieldProps } from '@mui/material';

export { default } from './TextField';

export type TTextFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  variant?: TextFieldVariants;
  hasToogle?: boolean;
  validate?: (value: string) => string | undefined;
  gridSize?: number;
  alternativeLabel?: string;
  additionalHelperText?: string;
} & TextFieldProps;
