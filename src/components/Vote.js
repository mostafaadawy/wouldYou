import React, { Component } from 'react'
import {connect } from 'react-redux'
import { handleAnswer } from '../actions/questions'
import { NavLink, withRouter } from 'react-router-dom'
class Vote extends Component{
        state = {
            selectedOption: "optionOne",
          }
      onValueChange=(event)=>{
        this.setState({
          selectedOption: event.target.value
        });
      }
    
      
    
render(){
  if(this.props.error404) return this.props.history.push('/error404')
  const {userName,userAvatar, optionOne, optionTwo}=this.props
 const formSubmit=(event)=>{
    event.preventDefault()
    const info = {QID:this.props.id, authUser:this.props.authUser, answer:this.state.selectedOption}
    this.props.handleAnswer(info)
    this.props.history.push('/home/answered')
  }
    return(
          <div className='card-outer'>
            <div className='card-header'>
            <NavLink className='close-card' to="/home"></NavLink>
                <h3>Asked by: {userName}</h3>
              </div>  
              <form onSubmit={formSubmit} className='card-form' >
                <div className='card-avatar' style={{ backgroundImage : `URL(${userAvatar})` }}></div>
                <div className='card-details'>
                  <h2>Would you Rather?</h2>
							    <div className="radio-toolbar" onChange={this.onChangeValue} >
								    <input type="radio" 
								          id="optionOne" 
								          name="optionOne" 
								          value="optionOne" 
								          checked={this.state.selectedOption === "optionOne"}
								          onChange={this.onValueChange}
								    />
								    <label htmlFor="optionOne">{optionOne}</label>
								    <input type="radio"
								          id="optionTwo" 
                          name="optionTwo" 
                          value="optionTwo"
                          checked={this.state.selectedOption === "optionTwo"}
                          onChange={this.onValueChange}
								    />
								    <label htmlFor="optionTwo">{optionTwo}</label>
							    </div>
                      <button>Vote</button>
                </div>
              </form>
            </div>
    )
}
}
function mapStateToProps({users,questions,authUser},{match}){
    const qlist=Object.keys(questions)
    const QID = match.params.QID
    const error404 = !qlist.includes(match.params.QID)
    if(error404){
      return {error404:true, }
    }
    const Quest  = questions[QID]
    const user = users[Quest.author]
    return {
      error404,
      id:Quest.id,
      userName:user.name,
      userAvatar:user.avatarURL,
      optionOne:Quest.optionOne.text,
      optionTwo:Quest.optionTwo.text,
      authUser:authUser,
      qlist:Object.keys(questions),
    }
    
}
function mapDispatchToProps(dispatch){
  return{
    handleAnswer: (info) => dispatch(handleAnswer(info))
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Vote))