import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ScoreCard from './ScoreCard'
import { connect } from 'react-redux'
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
    const medal=[
                    "https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png",
                    "https://img.icons8.com/emoji/96/000000/2nd-place-medal-emoji.png",
                    "https://img.icons8.com/emoji/96/000000/3rd-place-medal-emoji.png",
                    "https://img.icons8.com/color/96/000000/unlucky.png",
                ]
    const scoreList = Object.values(users).map((user)=>{
       return{ id:user.id,answers: Object.values(user.answers).length, 
        questions:user.questions.length,
        avatar:user.avatarURL,
        name:user.name,
        score:Object.values(user.answers).length+user.questions.length,
    }
    }).sort((a, b) => b.score - a.score)

    return{
        authUser,
        scoreList,
        medal,
    }
}
export default connect(mapStateToProps) (LeaderBoard)