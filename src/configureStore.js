import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./modules";

export const history = createHistory();
const router = routerMiddleware(history);

const enhancers = [];
const middleware = [thunk, router];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

export default function configureStore(initialState) {
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );
  const store = createStore(rootReducer, initialState, composedEnhancers);
  window.__STORE__ = store;
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./modules", () => {
      const nextReducer = require("./modules/index").default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
