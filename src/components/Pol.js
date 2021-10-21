import React from'react' 
import {connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Vote from '../components/Vote'
import VoteResult from '../components/VoteResult'
function Pol({notFound, isAnswered}){
    if(notFound) return <Redirect to='/not-found'/>
    return (
        isAnswered?<VoteResult/>:<Vote/>
        )
}
function mapStateToProps({authUser,questions},{match}){
    try{
        const id = match.params.questionId
        const question=questions[id]
        const isAnswered = question.optionOne.votes.includes(authUser) || question.optionTwo.votes.includes(authUser)
        return {
            notFound:false,
            isAnswered,
        }
        }catch(e){
            return {
                notFound:true,
            }
        }
    

}
export default withRouter(connect(mapStateToProps)(Pol))