import React from "react";
import { Provider } from "react-redux";
import { createStore as reduxCreateStore } from "redux";
import rootReducer from "./reducer";
import store from "./store";

export default ({ element }) => <Provider store={store()}>{element}</Provider>;
