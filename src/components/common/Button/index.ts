import { ButtonProps } from '@mui/material';

export { default } from './Button';

export type TButtonProps = ButtonProps & {
  size?: 'small' | 'medium' | 'large';
  fullWidthMob?: boolean;
  background?: string;
  centered?: boolean;
  textColor?: string;
};
