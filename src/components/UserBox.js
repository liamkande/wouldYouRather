import React, { Component } from 'react'

class UserBox extends Component {
  render() {
    const { onClick, title, avatarURL } = this.props

    return (
      <div className='viewBox small' onClick={onClick}>
        <div
          className='userAvatar small'
          style={{
            backgroundImage: `url(${avatarURL})`
          }} >
        </div>
        <div className='title'>
          {title}
        </div>
      </div>
    )
  }
}

export default UserBox
