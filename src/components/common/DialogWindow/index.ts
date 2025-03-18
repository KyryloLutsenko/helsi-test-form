export { default } from './DialogWindow';

export type TDialogWindowProps = {
  isDialogOpen: boolean;
  title: string;
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
};
