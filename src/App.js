import React, { Component } from "react";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import MainTheme from "./components/themes/Main";
import GlobalStyle from "./components/themes/Global";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <div className="App">
          <GlobalStyle />
          <Header />
          <main>
            <About />
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
