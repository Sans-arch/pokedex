import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  body {
    background: #282A36;
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;

    div#root {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
    }
  }
`;
