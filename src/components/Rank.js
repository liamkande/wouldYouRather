import React from 'react'

import RankCounter from './RankCounter'

const Rank = props => {

    return (
      <div className='userScores'>
        <RankCounter
          label='Questions asked'
          score={props.questionCount} />
        <RankCounter
          label='Questions answered'
          score={props.answerCount} />
      </div>
    )
}

export default Rank
