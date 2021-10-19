import { RECEIVE_CRED } from '../actions/cred';

export default function authedUser(state = [], action) {
    if (action.type === RECEIVE_CRED) {
        return action.cred
    } else {
        return state;
    }
}