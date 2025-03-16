export { default } from './ToggleSwitch';

export type TToggleSwitchProps = {
  name: string;
  setIsEnabled: (isEnabled: boolean) => void;
  isEnabled: boolean;
};
