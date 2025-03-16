import CreatePersonForm from 'components/forms/CreatePersonForm';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { CssBaseline } from '@mui/material';
import theme from 'styles/theme';
import GlobalStyles from 'styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <CreatePersonForm />
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
