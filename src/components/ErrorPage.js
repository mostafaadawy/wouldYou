
import React,{ Component } from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class ErrorPage extends Component {
  handleRedirect=()=>{
    this.props.history.push('/login')
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