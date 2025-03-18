import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    body1: {
      fontSize: '16px',
    },
    h6: {
      fontSize: '20px',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#179ed8',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000',
      secondary: '#939393',
    },
    common: {
      white: '#ffffff',
      black: '#000000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
