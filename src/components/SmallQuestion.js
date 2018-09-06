import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserBox from './UserBox'

class SmallQuestion extends Component {
  render() {
    const title = 'Would you rather?'
    const { onClick, avatarURL } = this.props

    return (
      <UserBox
        onClick={onClick}
        title={title}
        avatarURL={avatarURL} />
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const author = questions.hasOwnProperty(id)
    ? questions[id].author
    : ''

  const avatarURL = users.hasOwnProperty(author)
    ? users[author].avatarURL
    : ''

  return {
    avatarURL
  }
}

export default connect(mapStateToProps)(SmallQuestion)
