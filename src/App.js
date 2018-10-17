import React, { Component } from "react";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  body{
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777; 
    padding: 30px;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
