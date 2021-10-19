import { RECEIVE_QUESTIONS, CREATE_QUESTION } from "../actions/questions";
import {  SAVE_ANS } from '../actions/users';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { 
          ...state, 
          ...action.questions};
    case CREATE_QUESTION:
      return { 
          ...state, 
          [action.info.id]: action.info};
    case SAVE_ANS:
      const { authUser, QID, answer } = action.info;
      return {
        ...state,
        [QID]: {
          ...state[QID],
          [answer]: {
            ...state[QID][answer],
            votes: state[QID][answer].votes.concat(authUser),
          },
        },
      };
    default:
      return state;
  }
}
