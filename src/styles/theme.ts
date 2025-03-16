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
    h3: {
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
  },
});

export default theme;
