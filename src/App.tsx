import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ColorModesContext } from "./contexts/ColorModesContext";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyles";
import { themes } from "./styles/themes";

function App() {
  const { currentTheme } = useContext(ColorModesContext);

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
      </ThemeProvider>
      <HomePage></HomePage>
    </>
  );
}

export default App;
