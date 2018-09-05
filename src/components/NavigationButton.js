import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class NavigationButton extends Component {
  render() {
    let title, link, alternativeLink

    switch(this.props.page) {

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
          ( this.props.location.pathname === link )
          || ( this.props.location.pathname.toLowerCase().includes(alternativeLink) )
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
}

export default withRouter(NavigationButton)
