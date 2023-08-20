import React from "react";
import Router from "./Pages/Router";
import "./App.css";
import {Helmet, HelmetProvider,} from "react-helmet-async";


function App() {

  return (
      <HelmetProvider>
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
      </HelmetProvider>
  );
}

export default App;
