import React from "react";
import Router from "./Pages/Router";
import "./App.css";
import { HelmetProvider,} from "react-helmet-async";
import {Provider} from "react-redux";
import { store } from './Redux/store';
import SEO from "./Components/SEO";


function App() {

  return (
      <HelmetProvider>
    <div className="App">
        <SEO/>
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
