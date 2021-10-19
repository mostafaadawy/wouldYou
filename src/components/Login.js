import React, { Component, Fragment } from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import { handleReceiveCred } from "../actions/shared";
import CustomLoading  from "./CustomLoading"
import { setAuthUser } from '../actions/authUser'
class Login extends Component{
  componentDidMount() {
    try{this.props.handleReceiveCred()}catch(e){alert(e)}
  }
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
  if(cred){
     usernames = cred.map((c)=>(c.username)) 
  }else{
     usernames=[];
  }
  usernames = ['Select',...usernames]
  if (this.props.authUser !== 'NONE') {
    return <Redirect to="/" />;
  }
    return(
      <Fragment>
      {this.props.isLoading? <CustomLoading/>:
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
      }
      </Fragment>
    )
}
}
function mapStateToProps({ cred, authUser }) {
  return {
    cred,
    authUser,
    isLoading: cred.length>0? false:true,
  };
  
}

function mapDispatchToProps(dispatch) {
  return {
    handleReceiveCred: () => dispatch(handleReceiveCred()),
    handleLogin: (id) => dispatch(setAuthUser(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)