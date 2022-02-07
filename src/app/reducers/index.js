import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";


import userReducer from "./user";
import devtypeReducer from './devtype';

const buildRootReducer = (history) =>
  combineReducers({
    router: routerReducer(history),
    user: userReducer,
    devtype: devtypeReducer
  });

export default buildRootReducer;