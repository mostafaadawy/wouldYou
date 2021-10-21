import React, {Component} from 'react';
import { setAuthUser } from '../actions/authUser'
import { connect } from 'react-redux';
import { controlRouting, } from '../utils/HighOrderFunction'
import { handleReceiveCred } from "../actions/shared";
import { withRouter } from 'react-router-dom';
class App extends Component {
 componentDidMount(){
    const {dispatch}=this.props
    dispatch(setAuthUser('NONE'))
    dispatch(handleReceiveCred())
 }
  render(){
    const locationUrl=this.props.location.pathname;
    return(
      <div className="landing-page">
        {controlRouting(this.props.status,locationUrl)}
      </div>    
    )
}
}
function mapStateToProps({status}){
  return {status}  
}
export default withRouter(connect(mapStateToProps)(App))

