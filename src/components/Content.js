import React, { Component } from 'react'

import View from './View'
import NavigationBar from './NavigationBar'


class Content extends Component {
  render() {
    return (
      <div className='content page'>
        <NavigationBar />
        <View />
      </div>
    )
  }
}

export default Content
