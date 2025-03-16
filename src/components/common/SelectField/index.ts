import { InputLabelProps, SelectProps } from '@mui/material';

export { default } from './SelectField';

type TSelectOption = {
  value: string;
  label: string;
};

export type TSelectFieldProps = {
  name: string;
  label: string;
  options: TSelectOption[];
  variant?: InputLabelProps['variant'];
  gridSize?: number;
} & SelectProps;
