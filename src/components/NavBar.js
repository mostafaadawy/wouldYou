import React, { Component } from "react"
import { withRouter, NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { setAuthUser } from '../actions/authUser'
class NavBar extends Component {
  handleLogout=()=>{
    const { dispatch } =this.props 
    dispatch(setAuthUser('NONE'))
  }  

  render() {
  const { user } = this.props
    return (
      <div>
       <div className=""/>
        <nav className="nav-bar" onClick={(event)=>event.stopPropagation()}>
          <div className="nav-container">
            <div className="nav-logo">
            👋😎  {user.name}  
              <img className="crc" src={user.avatarURL} alt="Smiley face"/>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink exact to="/home" activeClassName="active" className="nav-links" >
                  💒 Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/add" activeClassName="active" className="nav-links" >
                  ❓ New Poll
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/leader-board" activeClassName="active" className="nav-links" >
                 👑 Leader Board 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/logout" activeClassName="active" className="nav-links" onClick={this.handleLogout}>
                 🔌 Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </ div>
    )
  }
  
}
function mapStateToProps({users, authUser}){
  return{
    user: users[authUser],
  }
}
export default withRouter(connect(mapStateToProps)(NavBar))