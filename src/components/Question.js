import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import { questionHandleProps } from '../utils/connectFunctions'

class Question extends Component {

render(){
  if(this.props.notFound) return <Redirect to='/not-found'/>
  const {questionId, isAnswered, userAvatar,optionOne, optionTwo, userName}=this.props;
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
            <NavLink exact to={`/questions/${questionId}`}>
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
  return questionHandleProps({questions, users},{isAnswered,questionId})
}
export default withRouter(connect(mapStateToProps)(Question))