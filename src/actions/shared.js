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
            })
    }
}

export function handleGetAllData() {
    return (dispatch) => {
      dispatch(showLoading());
      return getInitialData().then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      });
    };
  }