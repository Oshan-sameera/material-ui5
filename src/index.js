import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <>
    {/* // this is reduce to maring to 0 */}
    <CssBaseline />
    <App />
  </>,
  document.getElementById("root")
);

reportWebVitals();
