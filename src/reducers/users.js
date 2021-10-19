import { RECEIVE_USERS, SAVE_ANS, SAVE_USER } from '../actions/users';
import { CREATE_QUESTION } from "../actions/questions";
export default function users(state = {}, action) {
    switch(action.type){
        case SAVE_USER:
            const {id, name, password, imageUrl} = action.info
            return {
                ...state,
                [id]: {
                    id,
                    name,
                    password,
                    imageUrl,
                    answers: {},
                    questions: [],
                },
            }
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            } 
        case SAVE_ANS:
            const {QID, authUser, answer}=action.info
            return{
                ...state,
                [authUser]: {
                ...state[authUser],
                answers: Object.assign(state[authUser].answers, { [QID]: answer }),
                },
            }  
            case CREATE_QUESTION:{
                return { 
                    ...state,
                    [action.info.author]: {
                      ...state[action.info.author],
                      questions: state[action.info.author].questions.concat(action.info.id),
                    },
            }  
        }

        default:
            return state
    }
}