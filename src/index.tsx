import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./theme";
import { ThemeProvider } from "@chakra-ui/core";
import { LanguageProvider } from "./components/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LanguageProvider supportedLanguages={["nb", "en"]} defaultLanguage="nb">
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
