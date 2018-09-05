import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import AddQuestion from './AddQuestion'
import Answered from './Answered'
import NotFound from './NotFound'
import Leaderboard from './Leaderboard'
import Login from './Login'
import AuthedRoute from './AuthedRoute'
import Unanswered from './Unanswered'

class View extends Component {
  render() {
    return (
      <div className='viewPage'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Redirect to="/unanswered" />
            )} />
          <Route
            path='/login'
            component={Login} />
          <AuthedRoute
            path='/add'
            component={AddQuestion} />
          <AuthedRoute
            path='/unanswered'
            component={Unanswered} />
          <AuthedRoute
            path='/question/:id'
            component={Unanswered} />
          <AuthedRoute
            path='/answered'
            component={Answered} />
          <AuthedRoute
            path='/leaderboard'
            component={Leaderboard} />
          <Route
            component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default View
