import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleQuestion} from '../actions/questions'
import { withRouter } from 'react-router-dom'
class NewQuestion extends Component {
  state={
    optionOne:'',
    optionTwo:'',
  }
  onInputChange=(event)=>{
    const Value=event.target.value
    const Name=event.target.name
    this.setState({ [Name]: Value });}
    
    handleSubmit=(event)=>{
        event.preventDefault();
        const info={
          author:this.props.authUser,
          optionOne:this.state.optionOne,
          optionTwo:this.state.optionTwo,
        }
        this.props.handleQuestion(info)
        this.props.history.push('/pol/unanswered')
      }
    
  render(){
    return(
      <div className='row'>
        <div className='card-tabe-list'>
          <div className='card-outer'>
            <div className='card-header'>
              <h3>Asked by:{this.props.userName}</h3>
            </div>  
            <form onSubmit={this.handleSubmit} className='card-form' >
              <div className='card-details'>
                <h2>Would you Rather?</h2>
                <input type='text' name='optionOne' placeholder='optionOne' onChange={this.onInputChange}/>
                {!this.state.optionOne?<div className='validation'> * Required Field</div>:null}
                <h2>OR</h2>
                <input type='text' name='optionTwo' placeholder='optionTwo' onChange={this.onInputChange}/>
                {!this.state.optionTwo?<div className='validation'> * Required Field</div>:null}
                <button disabled={!this.state.optionOne || !this.state.optionTwo}>Create Question</button>
              </div>
            </form>
            </div>
          </div>
        </div>
        )
}
}
function mapStateToProps({authUser, users}){
  const userName = users[authUser].name
  return{
    authUser,
    userName,
  }
}
function mapDispatchToProps(dispatch){
  return{
    handleQuestion: (info)=>dispatch(handleQuestion(info))
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewQuestion))