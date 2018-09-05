import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    const { location } = this.props

    return (
      <div className='notFound'>
        <h3>Your request: (<code>{location.pathname}</code>), could not be found. Please try again!</h3>
      </div>
    )
  }
}

export default NotFound
