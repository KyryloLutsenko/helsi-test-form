import { Button as MuiButton } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop: string) => !prop.startsWith('$'),
})<{ $fullWidthMob?: boolean; $background?: string; $centered?: boolean; $color?: string }>(
  ({ theme, $fullWidthMob, $background, $centered, $color }) => ({
    backgroundColor: $background || theme.palette.primary.main,
    textTransform: 'uppercase',
    padding: '0.5rem 3rem',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: $background ? $background : theme.palette.primary.main,
    },
    width: $fullWidthMob ? '100%' : 'fit-content',
    display: $centered ? 'block' : 'inline-flex',
    margin: $centered ? '0 auto' : undefined,
    color: $color || theme.palette.common.white,
  }),
);
