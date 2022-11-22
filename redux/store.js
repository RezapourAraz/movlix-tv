import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

// middleware
const middleware = [thunk];

// create store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapperStore = createWrapper(makeStore);
