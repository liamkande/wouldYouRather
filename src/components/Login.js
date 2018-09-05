import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { setAuthedUser } from '../actions/authedUser'
import { handleAddUser } from '../actions/users'

import Answers from './Answers'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ViewBox from './ViewBox'

class Login extends Component {
  state = {
    view: 'initial',
    redirect: false
  }

  optionOneText = 'Log in'
  optionTwoText = 'Create an account'

  handleSignIn = () => {
    this.setState(() => ({
      view: 'signin'
    }))
  }

  handleSignUp = () => {
    this.setState(() => ({
      view: 'signup'
    }))
  }

  setInitialState = () => {
    this.setState(() => ({
      view: 'initial'
    }))
  }

  handleLogin = user => {
    this.props.login(user)
    this.setState(() => ({
      redirect: true
    }))
  }

  handleRegister = (id, name, avatarURL) => {
    this.props.createAccount(id, name, avatarURL)
    this.setState(() => ({
      redirect: true
    }))
    this.props.login(id)
  }

  loginOption = view => {
    switch(view) {
      case 'signin' :
        return (
          <div className='login-area'>
            <div
              className='arrow-back'
              onClick={() => this.setInitialState()} />
            <SignIn
              onLogin={user => this.handleLogin(user)} />
          </div>
        )
      case 'signup' :
        return (
          <div className='login-area'>
            <div
              className='arrow-back'
              onClick={() => this.setInitialState()} />
            <SignUp
              onRegister={(id, name, avatarURL) => this.handleRegister(id, name, avatarURL)} />
          </div>
        )
      case 'initial' :
        return (
          <Answers
            optionOneText={this.optionOneText}
            onClickOptionOne={this.handleSignIn}
            optionTwoText={this.optionTwoText}
            onClickOptionTwo={this.handleSignUp} />
        )
      default : {
        this.setInitialState()

        return <Redirect to='/login' />
      }
    }
  }

  render() {
    const { view, redirect } = this.state
    const { from } = { from: { pathname: '/unanswered' } }

    if (redirect === true) {
      return <Redirect to={from} />
    }

    const viewName = 'login'
    const title = 'Would you rather?'
    const avatarURL = 'https://www.proficientblogging.com/wp-content/uploads/2018/07/Would-You-Rather-Questions-for-Kids.jpg'

    return (
      <div className='viewPage'>
        <ul>
          <li>
            <div className='newUserGreet'>
              Questions for Kids / Teens
            </div>
          </li>
          <li>
            <ViewBox
              viewName={viewName}
              title={title}
              avatarURL={avatarURL}>
              {this.loginOption(view)}
            </ViewBox>
          </li>
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: user => {
      dispatch(setAuthedUser(user))
    },
    createAccount: (id, name, avatarURL) => {
      dispatch(handleAddUser(id, name, avatarURL))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
