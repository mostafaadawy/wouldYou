import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Progress } from 'semantic-ui-react'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class VoteResult extends Component{
 
render(){
    if(this.props.error404) return <Redirect to='/error404'/>
    const {amIansweredThisQuestion, Op1Percentage, 
        Op2Percentage, name, avatar,voteIcon, totalVotes,
        amIansweredOptionOne,amIansweredOptionTwo}=this.props
    return(
        <div className='card-outer'>
            <div className='card-header'>
                <NavLink className='close-card' to="/home/answered"></NavLink>
                <h3 style={{margin : 8}}>Asked by: {name}</h3>
            </div>
            <div className='card-form'>
                <div className='card-avatar' style={{backgroundImage : `URL(${avatar})`,alt:'AVATAR',}}></div>
                        <div className='card-details_result'>
                            <h2>{amIansweredThisQuestion? 'Thanks for Votting ❤':'waiting your vote ⌛'}</h2>
                            <h2>Would you Rather?</h2>
							<div className={amIansweredOptionOne?"my-result-container":"result-container"}  >
                                <span>Eat fresh food </span> {amIansweredOptionOne? <span className='your-vote'>'😉your vote'</span>:''}
                                <Progress percent={Op1Percentage} progress/>
							</div>
                            <div className={amIansweredOptionTwo?"my-result-container":"result-container"}  >
                                <span>Eat fast food</span> {amIansweredOptionTwo? <span className='your-vote'>'😉your vote'</span>:''}
                                <Progress percent={Op2Percentage} progress/>
							</div>
                            <h2>{totalVotes } <img alt='AVATAR' src={voteIcon}/></h2>
                        </div>
                    </div>
                </div>
            )
        }
}
function mapStateToProps({users, questions, authUser,},{match}){
    const QID= match.params.QID
    const Quest = questions[QID]
    if(Quest === undefined){
        return{
            error404:true
        }
    }else{
        const amIansweredOptionOne = Quest.optionOne.votes.includes(authUser)
        const amIansweredOptionTwo = Quest.optionTwo.votes.includes(authUser)
        const amIansweredThisQuestion= (amIansweredOptionOne || amIansweredOptionTwo)
        const Op1=Quest.optionOne.votes.length
        const Op2=Quest.optionTwo.votes.length
        const totalVotes=Op1+Op2
        const Op1Percentage = (Op1*100)/totalVotes
        const Op2Percentage = (Op2*100)/totalVotes
        const name=users[Quest.author].name
        const avatar = users[Quest.author].avatarURL
        const voteIcon = "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-vote-voting-justicon-lineal-color-justicon.png"
        return{
            totalVotes,
            amIansweredOptionOne,
            amIansweredOptionTwo,
            amIansweredThisQuestion,
            Op1Percentage,
            Op2Percentage,
            name,
            avatar,
            voteIcon,
            error404:false,
        }  
        }
    
}
export default withRouter(connect(mapStateToProps)(VoteResult)) 