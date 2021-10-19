import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ScoreCard from './ScoreCard'
import { connect } from 'react-redux'
import { leaderHandleProps } from '../utils/connectFunctions'

class LeaderBoard extends Component{
    render(){
        if (this.props.authUser === 'NONE') {
            return <Redirect to="/" />;
          } 
        return (
            <div className='card-tabe-list'> 
                {
                    this.props.scoreList.map((item,order)=>
                        <ScoreCard key={item.id} item={item} order={order} medal={this.props.medal}/>
                    )
                }   
            </div>
        )}
}
function mapStateToProps({authUser, users}){
    return leaderHandleProps({authUser, users})
}
export default connect(mapStateToProps) (LeaderBoard)