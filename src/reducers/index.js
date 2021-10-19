import authUser from "../reducers/authUser";
import users from "../reducers/users";
import cred from "../reducers/cred";
import questions from "../reducers/questions";
import { loadingBarReducer } from "react-redux-loading";
import { combineReducers } from "redux";

export default combineReducers({
  users,
  questions,
  authUser,
  cred,
  loadingBar: loadingBarReducer,
});
