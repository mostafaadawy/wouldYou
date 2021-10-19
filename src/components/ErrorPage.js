
import React,{ Component } from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthUser } from '../actions/authUser'
class ErrorPage extends Component {
  handleRedirect=()=>{
    const {dispatch}=this.props
    dispatch(setAuthUser('NONE'))
    this.props.history.push('/')
  }
    render(){
    return(
            <div className='error-page'>
                <h2>Oops</h2>
                <h1>404</h1>
                <div className='image-error'></div>
                <h3>Unfortunately this action is not allowed</h3>
                <div onClick={this.handleRedirect} className='btn'>Relogin Please</div>   
            </div>  
    )        
    }
}
export default withRouter(connect()(ErrorPage))