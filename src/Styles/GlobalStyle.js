import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-image: linear-gradient(to right, #99d65c,white,white,white,white,#ff471a,#ff471a);
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`