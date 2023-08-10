import React from "react";
import Router from "./Pages/Router";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AGILE DREAMERS</title>
        <link rel="canonical" href="https://agiledreamers.com/" />
        <meta name="description" content="B2B matching platform" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <Router />
    </div>
  );
}

export default App;
