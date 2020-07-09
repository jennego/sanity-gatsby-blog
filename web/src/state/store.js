import { createStore, compose } from "redux";
import rootReducer from "./reducer";

const store = () => {
  const windowGlobal = typeof window !== "undefined" && window;

  const devtools =
    process.env.NODE_ENV === "development" && windowGlobal.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f;

  const store = createStore(rootReducer, compose(devtools));

  return store;
};

export default store;
