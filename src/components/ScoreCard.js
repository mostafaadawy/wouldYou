import React, { Component } from 'react'

class ScoreCard extends Component {
render(){
  const {item, order, medal}=this.props
  const index=order>=medal.length?medal.length-1:order 
  return(
          <div className='card-list'>
            <div className='row'>
              <div className='card-outer'>
                <div className='card-header'>
                  <h3>{item.name}</h3>
                </div>
                <div className='card-form' >
                  <div className='card-avatar' style={{backgroundImage : `URL(${item.avatar})`}}></div>
                      <div className='card-details center'>
                          <h2>{order+1}</h2>
                          <h4>Questions - {item.questions}</h4>
                          <h4>Answered  - {item.answers}</h4>
                      </div>
                      <div className='card-score'>
                        <img src={medal[index]} alt='AVATAR'/>
                        <div className='score-inner'>
                          <h4>Score</h4>
                          <h2>{item.score}</h2>
                        </div>
                      </div>
                  </div>
                </div>
                </div>
            </div>
              
  )
}
}
export default ScoreCard