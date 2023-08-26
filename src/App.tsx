import React from "react";
import Router from "./Pages/Router";
import "./App.css";
import {Helmet, HelmetProvider,} from "react-helmet-async";
import {Provider} from "react-redux";
import { store } from './Redux/store';


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
        <meta property="og:url" content="https://agiledreamers.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="AGILE DREAMERS"/>
        <meta property="og:description" content="B2B matching platform"/>
        <meta property="og:image" content="https://agiledreamers.com/logo1200x630.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="agiledreamers.com"/>
        <meta property="twitter:url" content="https://agiledreamers.com/"/>
        <meta name="twitter:title" content="AGILE DREAMERS"/>
        <meta name="twitter:description" content="B2B matching platform"/>
        <meta name="twitter:image" content="https://agiledreamers.com/logo1200x630.png"/>
      </Helmet>
      <Router />
    </div>
      </HelmetProvider>
  );
}

const AppWithStore = () => {
  return (
        <Provider store={store}>
          <App />
        </Provider>
  );
};

export default AppWithStore;
