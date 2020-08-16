import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;

  }
  html, body, #root{
    min-height: 100%;
  }
  #root{
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  body {
    background: #EFF0F3;
    -webkit-font-smoothing: antialiased !important;
  }
  *, input, button {
    font-size: 14px;
    border:none;
    font-family: 'Nunito', sans-serif;
  }
  button {
    cursor: pointer;
    font-weight: 600;
  }
  a{
    text-decoration: none;
    color: white;
  }

  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-track{
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #333;
    border-radius: 10px;
  }
`;
