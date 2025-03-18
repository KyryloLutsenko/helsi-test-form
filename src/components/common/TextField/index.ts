export { default } from './TextField';

import { TextFieldVariants, TextFieldProps } from '@mui/material';
import { TGridSizeProps } from 'types/globalTypes';

export type TTextFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  variant?: TextFieldVariants;
  hasToogle?: boolean;
  gridSize?: TGridSizeProps;
  alternativeLabel?: string;
  additionalHelperText?: string;
} & TextFieldProps;
