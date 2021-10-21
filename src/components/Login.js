import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import { setAuthUser } from '../actions/authUser'
import { setStatus } from "../actions/shared";
import { handleGetAllData } from '../actions/shared'
class Login extends Component{
    state = {
        password : "",
        selectedUser : '',
    };
  onInputChange=(event)=>{
    const Value=event.target.value
    const Name=event.target.name
    this.setState({ [Name]: Value });
  }

  onSubmitForm=(event)=>{
    event.preventDefault();
    if(!this.state.selectedUser){
      alert('You Have to Enter All Credintials')
    }else{
      const chk={username:this.state.selectedUser, password:this.state.password}
      const result = this.props.cred.find(elem=> elem.username===chk.username && elem.password===chk.password )
      if(result===undefined){
       alert('You Have Entered Wrong Credentials') 
      }else{
        this.props.handleLogin(result.username)
      }
    }
  }
render(){
  const { cred } = this.props
  let usernames; 
  if(cred){usernames = cred.map((c)=>(c.username)) 
  }else{ usernames=[]}
  usernames = ['Select',...usernames]

    return(
        <form  onSubmit={this.onSubmitForm} id="loginform">
        <h2>Login</h2>
        <div className="row">
          <img src="/pngegg.png" alt={`Avatar of logo}`} className='avatar'/>
        </div>
        <div>
        <div className="row">
          <label>Username</label>
          <select name='selectedUser' onChange={this.onInputChange}>
            {usernames.map((elem,i) =>(
              <option value={elem} key={i}> {elem}</option>
            ))}
          </select>
          {!this.state.selectedUser?<div className='validation'> * Required Field</div>:null}
        </div> 
        <div className="row">
          <label>Enter Password</label>
          <input type='password' placeholder='' name='password' id='password' autoComplete="on" onChange={this.onInputChange}/>
          {!this.state.password?<div className='validation'> * Required Field</div>:null}
        </div> 
          <div id="button"  className="row">
            <button disabled={!this.state.password}>Start Game</button>
          </div>
        </div>
        <div className="row">
        <NavLink exact to="/register">New to game</NavLink>
        </div>
      </form>
    )
}
}
function mapStateToProps({ cred }) {
  return {cred};
}
function mapDispatchToProps(dispatch) {
  return {
    handleLogin: (id) => {
      dispatch(setAuthUser(id))
      dispatch(setStatus(1))
      dispatch(handleGetAllData())
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)