import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Content from './components/Content'
import WelcomeUser from './components/WelcomeUser'

import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router } from 'react-router-dom'

import { handleInitialData } from './actions/shared'



class App extends Component {
  componentDidMount() {
    this.props.loadInitial()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='body'>
            <div className='content header'>
            <h2>Would You Rather?</h2>
              <WelcomeUser />
            </div>
            <Content />
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadInitial: () => {
      dispatch(handleInitialData())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
