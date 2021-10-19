import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { Component } from 'react'
import Question from './Question';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { homeHandleProps } from '../utils/connectFunctions'

class Home extends Component {
  componentDidMount(){
    const {isAns}=this.props
    this.setState({index:isAns})
  }
  state={
    index:0,
  }
  setIndex=(index)=>{
    this.setState({index})
  }
    render(){
      if (this.props.authUser === 'NONE') {
        return <Redirect to="/" />;
      } 
      const {answeredQuestions, unAnsweredQuestions } = this.props
        return(
            <Tabs selectedIndex={this.state.index} onSelect={index => this.setIndex(index)} className='card-tabe-list'>
            <TabList>
              <Tab>📃UnAnswered Questions</Tab>
              <Tab>📜Answered Question</Tab>
            </TabList>
            <TabPanel>
              {
                unAnsweredQuestions.map((QID,i)=>
                  <Question key={i} isAnswered={false} questionId={QID}/>
              )
              }
            </TabPanel>
            <TabPanel>
              {
                answeredQuestions.map((QID,i)=>
                  <Question key={i} isAnswered={true} questionId={QID}/>
              )
              }
            </TabPanel>
          </Tabs>
        )
    }
}
function mapStateToProps({questions, authUser},{isAns}){
  return homeHandleProps({questions, authUser},{isAns})
}
export default  connect(mapStateToProps)(Home)