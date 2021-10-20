import React, { Fragment, Component } from "react";
import { connect } from 'react-redux'
import {Route,Switch, Redirect, withRouter } from "react-router-dom"; 
import { handleGetAllData } from '../actions/shared'
import CustomLoading  from './CustomLoading'
import VoteResult from './VoteResult'
import Vote from './Vote'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
  
class Landing extends Component{
    componentDidMount(){
      try{this.props.handleGetAllData()}catch(e){alert(e)}
     }
render(){ 

    if (this.props.authUser === 'NONE') {
        return <Redirect to="/" />;
      } 
    const chkURL=this.props.location.pathname;
    const {isQuestionLoaded}=this.props  
    return(    
    <Fragment>
            {isQuestionLoaded?
            <Fragment>
              <NavBar />
                <Switch>
                  <Route exact path= '/login'>
                      <Redirect to='/home'/>
                  </Route>
                    <Route exact path="/home">
                        <Home isAns={0}/>
                    </Route>
                    <Route exact path="/home/answered">
                        <Home isAns={1}/>
                    </Route>
                    <Route exact path="/add">
                        <NewQuestion />
                    </Route>
                    <Route exact path="/leader-board">
                        <LeaderBoard />
                    </Route>
                    {chkURL.includes('vote-result')&& 
                      <Route path="/vote-result/:QID">
                        <VoteResult/>
                      </Route>
                    }    
                    {chkURL.includes('questions')&& 
                      <Route path="/questions/:QID">
                        <Vote/>
                      </Route>
                    }   
                    <Route exact path= '/logout'>
                      <Redirect to='/'/>
                    </Route>
                </Switch>
              <Footer />
    </Fragment>
            :  
            <CustomLoading/>
           }      
    </Fragment>
    )
}
}
function mapStateToProps({questions}){
  const isQuestionLoaded =Object.values(questions).length>0
    return{
      questions,
      isQuestionLoaded,
    }
}
 
  function mapDispatchToProps(dispatch) {
    return {
      handleGetAllData: () => dispatch(handleGetAllData()),
    };
  }
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing))