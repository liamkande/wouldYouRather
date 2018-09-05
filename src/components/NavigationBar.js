import React from 'react'

import NavigationButton from './NavigationButton'

const NavigationBar = props => {

    return (
      <div className='navigationBar'>
        <NavigationButton page={'add'} />
        <NavigationButton page={'unanswered'} />
        <NavigationButton page={'answered'} />
        <NavigationButton page={'leaderboard'} />
      </div>
    )
}

export default NavigationBar
