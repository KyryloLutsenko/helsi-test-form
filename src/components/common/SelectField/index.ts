export { default } from './SelectField';
import { InputLabelProps, SelectProps } from '@mui/material';

import { TGridSizeProps } from 'types/globalTypes';

type TSelectOption = {
  value: string;
  label: string;
};

export type TSelectFieldProps = {
  name: string;
  label: string;
  options: TSelectOption[];
  variant?: InputLabelProps['variant'];
  gridSize?: TGridSizeProps;
} & SelectProps;
