import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import reportWebVitals from "./reportWebVitals";
import { RickAndMortyCharacters } from "features/rick-and-morty-characters";
import { GlobalStyle } from "styles/global-styles";
import { basic } from "styles/themes/basic";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={basic}>
        <GlobalStyle />
        <RickAndMortyCharacters />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
