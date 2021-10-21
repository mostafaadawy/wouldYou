import { SET_STATUS } from '../actions/shared';

export default function status(state = null, action) {
    if (action.type === SET_STATUS) {
        return action.val
    } else {
        return state;
    }
}