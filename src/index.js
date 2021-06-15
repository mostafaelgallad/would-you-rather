import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import reducers from "./reducers";
import middleware from "./middlwares";
import { createStore } from "redux";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
