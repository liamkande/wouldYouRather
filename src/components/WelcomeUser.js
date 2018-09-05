import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { unsetAuthedUser } from '../actions/authedUser'

class WelcomeUser extends Component {
  render() {
    const { userName, loggedIn, avatarURL, logout } = this.props

    return (
      <div className='welcomeUser'>
        <div className='user'>
          <p><strong>Hello{userName}{!userName && (
            <span>!</span>
          )}</strong></p>
          {userName && (
            <div
              className='userAvatar tiny'
              style={{
                backgroundImage: `url(${avatarURL})`
              }}>
            </div>
          )}
        </div>
        {loggedIn && (
          <Button  onClick={logout} variant="contained" color="secondary">Log out</Button>
        )}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  let userName, loggedIn = false, avatarURL
  if ( authedUser !== null && users.hasOwnProperty(authedUser) ) {
    userName = ` ${users[authedUser].name}!`
    loggedIn = true
    avatarURL = users[authedUser].avatarURL
  }

  return {
    userName,
    loggedIn,
    avatarURL
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(unsetAuthedUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeUser)
