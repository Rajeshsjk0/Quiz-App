import React from "react";
import ReactDOM from "react-dom/client";
// import * as ReactDOMClient from "react-dom/client";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./store/reducers";
import App from "./App";
import { QuizProvider } from "./store/context/context";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <QuizProvider>
      <App />
    </QuizProvider>
  </Provider>
);
