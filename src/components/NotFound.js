import React from 'react'

const NotFound = props => {

    return (
      <div className='notFound'>
        <h3>Your request: (<code>{props.location.pathname}</code>), could not be found. Please try again!</h3>
      </div>
    )
}

export default NotFound
