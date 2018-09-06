import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class Answer extends Component {
  render() {
    const {  optionText, onClick, isActive, answered } = this.props

    return (
      <Button
        onClick={onClick}
        variant="contained">
        {optionText}
      </Button>
    )
  }
}

export default Answer
