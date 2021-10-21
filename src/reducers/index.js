import authUser from "../reducers/authUser";
import users from "../reducers/users";
import cred from "../reducers/cred";
import status from "../reducers/status"
import questions from "../reducers/questions";
import { loadingBarReducer } from "react-redux-loading";
import { combineReducers } from "redux";

export default combineReducers({
  status,
  users,
  questions,
  authUser,
  cred,
  loadingBar: loadingBarReducer,
});
