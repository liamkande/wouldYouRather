import React, { Component } from 'react'

import NavigationButton from './NavigationButton'

class NavigationBar extends Component {
  render() {

    return (
      <div className='navigationBar'>
        <NavigationButton page={'add'} />
        <NavigationButton page={'unanswered'} />
        <NavigationButton page={'answered'} />
        <NavigationButton page={'leaderboard'} />
      </div>
    )
  }
}

export default NavigationBar
