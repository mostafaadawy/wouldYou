import { saveQuestion, saveQuestionAnswer } from '../utils/apiSimulator'
import { showLoading, hideLoading } from "react-redux-loading";
import { saveAns } from './users'

export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export function receiveQuestions(questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    };
  }


export const CREATE_QUESTION='CREATE_QUESTION'
function createQuestion(info){
    return{
        type: CREATE_QUESTION,
        info,
    }
} 

export function handleQuestion(info){
    return(dispatch)=>{
        dispatch(showLoading())
        return(saveQuestion(info))
        .then((info)=>{
                dispatch(createQuestion(info))
                dispatch(hideLoading())
            }
        )
        .catch((e) => {
          alert(e.message)
        });
    }
}


export function handleAnswer(info) {
    return (dispatch) => {
      dispatch(showLoading());
      return saveQuestionAnswer(info)
        .then(() => {
          dispatch(saveAns(info))
          dispatch(hideLoading())
        })
        .catch((e) => {
          alert(e.message)
        });
    };
  }