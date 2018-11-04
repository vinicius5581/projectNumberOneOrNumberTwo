import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  reducers,
  {
    products: [{ name: "eggs" }],
    user: "Vini"
  },
  allStoreEnhancers
);

export default store;