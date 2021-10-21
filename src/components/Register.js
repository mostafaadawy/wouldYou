import React, { Component } from 'react'
import ImageInput from '../utils/ImageInpute'
import { connect } from 'react-redux'
import { handleNewUser } from '../actions/users'
import { withRouter } from 'react-router-dom'
import { handleReceiveCred } from "../actions/shared";
class Register extends Component{
  state = {
    password : "",
    name : "",
    id : "",
    imageUrl : "",
};
onInputChange=(event)=>{
const Value=event.target.value
const Name=event.target.name
this.setState({ [Name]: Value });
}
onSubmitForm=(event)=>{
  event.preventDefault();
  const {dispatch}=this.props
  dispatch(handleNewUser({id:this.state.id, name:this.state.name, password:this.state.password, imageUrl:this.state.imageUrl}))
  dispatch(handleReceiveCred())
  this.props.history.push('/')
}
imageChange=(url)=>
{
  this.setState({ imageUrl: `${url}` });
}
render(){
    return(
<form id="loginform" onSubmit={this.onSubmitForm}>
      <h2 id="headerTitle">Registeration</h2>
      <div className="row">
      <label>Pick your photo</label>
      <ImageInput className='login-avatar' name='imageUrl' maxHeight= {150} imageChange={this.imageChange}/>
      {!this.state.imageUrl?<div className='validation'> * Required Field</div>:null}
      </div>
      <div> 
      <div className="row">
        <label>Full Name</label>
        <input type='text' placeholder='' name='name' id='name'  onChange={this.onInputChange}/>
        {!this.state.name?<div className='validation'> * Required Field</div>:null}
      </div>
      <div className="row">
        <label>Username</label>
        <input type='text' placeholder='' name='id' id='id'  onChange={this.onInputChange}/>
        {!this.state.id?<div className='validation'> * Required Field</div>:null}
      </div>
      <div className="row">
        <label>Password</label>
        <input type='password' placeholder='' name='password' id='password' autoComplete="on"  onChange={this.onInputChange}/>
        {!this.state.password?<div className='validation'> * Required Field</div>:null}
      </div> 
        <div id="button"  className ="row">
          <button disabled={!this.state.name || !this.state.id|| !this.state.imageUrl|| !this.state.password}>Add New Player</button>
        </div>
      </div>
    </form>
    )
}
}

export default withRouter(connect()(Register))