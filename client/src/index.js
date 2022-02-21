import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// Comentado para que no de warning
// const REACT_APP_API = process.env.REACT_APP_API
//   ? process.env.REACT_APP_API
//   : "http://localhost:3001";

// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


