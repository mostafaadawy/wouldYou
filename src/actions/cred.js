export const RECEIVE_CRED='RECEIVE_CRED'
export function receiveCredentials(cred){
return{
    type:RECEIVE_CRED,
    cred,
}
}