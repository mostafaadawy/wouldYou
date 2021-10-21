import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Progress } from 'semantic-ui-react'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { voteResultHandleProps } from '../utils/connectFunctions'
class VoteResult extends Component{
 
render(){
    if(this.props.notFound) return <Redirect to='/not-found'/>
    const {Op1,Op2, Op1Percentage, 
        Op2Percentage, name, avatar,voteIcon, totalVotes,
        amIansweredOptionOne,amIansweredOptionTwo}=this.props
    return(
        <div className='card-outer'>
            <div className='card-header'>
                <NavLink className='close-card' to="/pol/answered"></NavLink>
                <h3 style={{margin : 8}}>Asked by: {name}</h3>
            </div>
            <div className='card-form'>
                <div className='card-avatar' style={{backgroundImage : `URL(${avatar})`,alt:'AVATAR',}}></div>
                        <div className='card-details_result'>
                            <h2>Would you Rather? ({totalVotes }) <img className='vote-icon' alt='AVATAR' src={voteIcon}/></h2>
							<div className={amIansweredOptionOne?"my-result-container":"result-container"}  >
                                <span>Eat fresh food </span> {amIansweredOptionOne? <span className='your-vote'>'😉your vote'</span>:''}
                                <h5>{Op1} of {totalVotes} selected Option One</h5>
                                <Progress percent={Op1Percentage.toFixed(2)} progress/>
							</div>
                            <div className={amIansweredOptionTwo?"my-result-container":"result-container"}  >
                                <span>Eat fast food</span> {amIansweredOptionTwo? <span className='your-vote'>'😉your vote'</span>:''}
                                <h5>{Op2} of {totalVotes} selected Option Two</h5>
                                <Progress percent={Op2Percentage.toFixed(2)} progress/>
							</div>
                        </div>
                    </div>
                </div>
            )
        }
}
function mapStateToProps({users, questions, authUser,},{match}){
    return voteResultHandleProps ({users, questions, authUser,},{match})
}
export default withRouter(connect(mapStateToProps)(VoteResult)) 