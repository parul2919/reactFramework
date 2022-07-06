/* eslint-disable no-nested-ternary */
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./common/style/theme/theme";
import "./common/style/css/index.css";
import Routers from "./Router/Routers";
import ErrorBoundary from "./components/atom/errorBoundry";

function App() {
  const { REACT_APP_CHECK_URL_1, REACT_APP_CHECK_ENV } = process.env;
  return (
    <ThemeProvider theme={Theme}>
      <div>{REACT_APP_CHECK_URL_1}</div>
      <br />
      <br />
      <div>{REACT_APP_CHECK_ENV}</div>
      <ErrorBoundary>
        <Routers />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
