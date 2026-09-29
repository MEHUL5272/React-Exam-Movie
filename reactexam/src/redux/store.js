import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import movieReducer from "./reducers/movieReducer";
import authReducer from "./reducers/authReducer";
import preferenceReducer from "./reducers/preferenceReducer";

const rootReducer = combineReducers({
  moviesData: movieReducer,
  auth: authReducer,
  preferences: preferenceReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;