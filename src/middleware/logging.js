import { RECEIVE_CRED } from '../actions/cred'
const logging = (store) => (next) => (action) => {
    const {authUser} =store.getState()
    if(action.type === RECEIVE_CRED || action.type ==='loading-bar/HIDE' || action.type === 'loading-bar/SHOW' || action.type === 'SAVE_USER' || action.type === 'SET_AUTH_USER'){
        console.log('Allowed Action')   
    }else {
        if(!authUser){
            console.log('Not Allowed Action type is: '+action.type+'  No authUser')
            
        }else{
            console.log('Allowed Action type is: '+action.type+'  authUser')
        }
    }
    
    return next(action) 
}
export default logging;