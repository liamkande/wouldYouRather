import React from 'react'

const RankCounter = props => {

    return (
      <div className='showScore'>
        <div className='scoreLabel'>
          {props.label}
        </div>
        <div className='score'>
          {props.score}
        </div>
      </div>
    )
}

export default RankCounter
