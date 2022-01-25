import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userReducer from "./user";

const buildRootReducer = (history) =>
  combineReducers({
    router: routerReducer(history),
    user: userReducer,
  });

export default buildRootReducer;