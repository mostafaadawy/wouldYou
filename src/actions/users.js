import { showLoading, hideLoading } from "react-redux-loading";
import { saveUser } from "../utils/apiSimulator";
import { CREATE_QUESTION } from "./questions";

export const RECEIVE_USERS='RECEIVE_USERS'
export function receiveUsers(users){
return{
    type:RECEIVE_USERS,
    users,
}
}

export const SAVE_ANS='SAVE_ANS'
export function saveAns(info){
return{
    type:SAVE_ANS,
    info,
}
}


export function addQuestion({questionId, authUser}){
   return{ type: CREATE_QUESTION,
    questionId,
    authUser,}
}
export const SAVE_USER='SAVE_USER'
function newUser(info){
return{
    type:SAVE_USER,
    info,
}
}

export function handleNewUser(info) {
    return (dispatch) => {
      dispatch(showLoading());
      dispatch(newUser(info));
      return saveUser(info).then(() => dispatch(hideLoading()));
    };
  }
  