import React from 'react'
import Card from '@material-ui/core/Card'

const ViewBox = props => {

    return (
      <Card className='viewBox'>
        <div
          className='userAvatar'
          style={{
            backgroundImage: `url(${props.avatarURL})`
          }} />
        <div className='details'>
          <div className='title'>
            {props.title}
          </div>
          {props.children}
        </div>
        <div />
    </Card>
    )
}

export default ViewBox
