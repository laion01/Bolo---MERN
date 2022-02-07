import { LOGIN_USER, LOGOUT_USER, SET_USER, RESET_USER } from "../actions/user";

const initialState = {
  isAuth: false,
  isAdmin: false,
  user: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        user: action.user,
        isAuth: true,
        isAdmin: action.user.isAdmin,
        userid: action.user.id,
        user: action.user
      };
    case LOGOUT_USER:
      return {
        isAuth: false,
        isAdmin: false,
        user: null,
      };
    case SET_USER:
      return {
        user: action.user,
        isAuth: true,
        isAdmin: action.user.isAdmin
      };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
}
