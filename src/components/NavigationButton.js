import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const NavigationButton  = props => {

    let title, link, alternativeLink

    switch(props.page) {

      case 'leaderboard' : {
        title = 'Leaderboard'
        link = `/leaderboard`
        break
      }
      case 'answered' : {
        title = 'Answered questions'
        link = `/answered`
        break
      }
      case 'unanswered' : {
        title = 'Unanswered questions'
        link = `/unanswered`
        alternativeLink = `/question/`
        break
      }

      case 'add' : {
        title = 'Add question'
        link = `/add`
        break
      }
      default : {
        title = 'Invalid link'
        link = `/404`
        break
      }
    }

    const active =
          ( props.location.pathname === link )
          || ( props.location.pathname.toLowerCase().includes(alternativeLink) )
            ? 'active'
            : ''

    return (
      <div className={`${active}`}>
        <Link to={link}>
        <Button variant="contained">{title}</Button>
        </Link>
      </div>
    )

}

export default withRouter(NavigationButton)
