//dev-mks/src/styles/globalStyles.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Estilos Gerais */
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #FFFFFF;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos para o footer */
  footer {
    background-color: #EEEEEE;
    border: none;
    color: #000000;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  footer p {
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.63px;
  }
`;

export default GlobalStyle;
