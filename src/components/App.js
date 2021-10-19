import React, {Component} from 'react';
import { setAuthUser } from '../actions/authUser'
import { connect } from 'react-redux';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage'
import Landing from './Landing';
import Sign from './Sign';
import CustomLoading from './CustomLoading';
import { decideStatus, } from '../utils/connectFunctions'

class App extends Component {
 componentDidMount(){
   if(this.props.status<=1){
    const {dispatch}=this.props
    dispatch(setAuthUser('NONE'))
    console.log('initialized')
   } 
 }
  render(){
    const chkURL=this.props.location.pathname;
    const {status}=this.props
    const customSwitch=(status)=>{
      switch(status) {
        case 0 || 1:
          return chkURL.includes('/vote')?<Redirect to='/error404'/>:<Sign/>
        case 2:
          return <Landing/> 
        default:
          return <CustomLoading/>
      }
    } 
    return(
      <div className="landing-page">
        <Switch>
          <Route exact path= '/logout'>
              <Redirect to='/'/>
          </Route>
          <Route exact path= '/'>
              {customSwitch(status)}
          </Route>
          <Route exact path= '/login'>
              {customSwitch(status)}
          </Route>
          <Route exact path="/register">
              {customSwitch(status)}
          </Route>
          <Route exact path="/home">
              {customSwitch(status)}
          </Route>
          <Route exact path="/home/answered">
              {customSwitch(status)}
          </Route>
          <Route exact path="/new-question">
              {customSwitch(status)}
          </Route>
          <Route exact path="/leader-board">
              {customSwitch(status)}
          </Route>
          {chkURL.includes('vote-result')&& 
            <Route path="/vote-result/:QID">
              {customSwitch(status)}
            </Route>
          }    
          {(chkURL.includes('vote')&&(!chkURL.includes('result')))&& 
            <Route path="/vote/:QID">
              {customSwitch(status)}
            </Route>
          }    
          <Route path= '/'>
              <ErrorPage/>
          </Route>
        </Switch>
      </div>    
    )
}
}
function mapStateToProps({authUser, cred}){
  return decideStatus({authUser, cred})  
}
export default withRouter(connect(mapStateToProps)(App))

