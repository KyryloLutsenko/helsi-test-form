import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize};
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.default};
    line-height: 1.5;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export default GlobalStyles;
