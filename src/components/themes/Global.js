import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, 
  *::after, 
  *::before {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    /* font-size: 16px; */
    line-height: 1.7;
    color: ${props => props.theme.colorGreyDark}; 
    padding: 3rem;
    box-sizing: border-box;
  }

  .clearfix {
    &::after{
      content:"";
      display: table;
      clear: both;
    }
  }
`;

export default GlobalStyle;
