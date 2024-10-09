import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textLight};
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    padding: 10px 20px;
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export default GlobalStyles;
