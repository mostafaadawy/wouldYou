import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
class Question extends Component {

render(){
  if(this.props.error404) return <Redirect to='/error404'/>
  const {questionId, isAnswered, users,questions}=this.props;
  const userName = users[questions[questionId].author].name;
  const userAvatar = users[questions[questionId].author].avatarURL;
  const optionOne=questions[questionId].optionOne.text
  const optionTwo=questions[questionId].optionTwo.text
  return(
    <div className='row'>
      <div className='card-outer'>
        <div className='card-header'>
           <h3>Asked by: {userName}</h3>
         </div>
        <div className='card-form' >
          <div className='card-avatar' style={{backgroundImage : `URL(${userAvatar})` }}></div>
          <div className='card-details center'>
            <h2>Would you Rather?</h2>
            <h4 style={{fontFamily:'sans-serif'}}>🔵{optionOne} 🔵 {optionTwo}</h4>
            <NavLink exact to={isAnswered?  `/vote-result/${questionId}`:`/vote/${questionId}`}>
              <button>{isAnswered?'View Result':'Vote'}</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>     
  )
}
}
function mapStateToProps({questions, users},{isAnswered,questionId}){
  try{
    return{
      error404:false,
      questions,
      users,
      isAnswered,
      questionId,
    }
  }catch(e){}
  return{
    error404:true,
  }
}
export default withRouter(connect(mapStateToProps)(Question))