import { getUsersCred } from '../utils/apiSimulator';
import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../utils/apiSimulator";
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { receiveCredentials } from './cred'

export function handleReceiveCred(){
    return (dispatch)=>{
            dispatch(showLoading())
            return getUsersCred().then((cred)=>{
                dispatch(receiveCredentials(cred))
                dispatch(hideLoading())
                dispatch(setStatus(0))
            })
    }
}

export function handleGetAllData() {
    return (dispatch) => {
      dispatch(showLoading());
      return getInitialData().then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading())
        dispatch(setStatus(2))
      });
    };
  }

export const SET_STATUS = "SET_STATUS";
export function setStatus(val) {
    return {
        type: SET_STATUS,
        val,
    }
}