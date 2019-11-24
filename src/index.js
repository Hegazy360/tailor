import React from "react";
import ReactBreakpoints from "react-breakpoints";
import ReactDOM from "react-dom";
import { ToastContainer } from 'react-toastify';

import Firebase, { FirebaseContext } from "components/Firebase";
import App from "./App";

import "./index.sass";
import * as serviceWorker from "./serviceWorker";

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920
};

ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
      <ToastContainer />
    </FirebaseContext.Provider>
  </ReactBreakpoints>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
