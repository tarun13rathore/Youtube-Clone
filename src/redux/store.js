import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
