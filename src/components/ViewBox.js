import React, { Component } from 'react'
import Card from '@material-ui/core/Card';

class ViewBox extends Component {
  render() {
    const { title, avatarURL } = this.props

    return (
      <Card className='viewBox'>
        <div
          className='userAvatar'
          style={{
            backgroundImage: `url(${avatarURL})`
          }} />
        <div className='details'>
          <div className='title'>
            {title}
          </div>
          {this.props.children}
        </div>
        <div />

    </Card>
    )
  }
}

export default ViewBox
