import React from 'react'
import View from './View'
import NavigationBar from './NavigationBar'


const Content  = props => {

    return (
      <div className='content page'>
        <NavigationBar />
        <View />
      </div>
    )
}

export default Content
