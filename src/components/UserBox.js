import React from 'react'

const UserBox  = props => {

    return (
      <div className='viewBox small' onClick={props.onClick}>
        <div
          className='userAvatar small'
          style={{
            backgroundImage: `url(${props.avatarURL})`
          }} >
        </div>
        <div className='title'>
          {props.title}
        </div>
      </div>
    )
}

export default UserBox
