import React, { Component } from 'react'

class RankCounter extends Component {
  render() {
    const { label, score } = this.props

    return (
      <div className='showScore'>
        <div className='scoreLabel'>
          {label}
        </div>
        <div className='score'>
          {score}
        </div>
      </div>
    )
  }
}

export default RankCounter
