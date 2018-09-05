import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'


class AddQuestionForm extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChange = e => {
    const name = e.target.name
    const text = e.target.value
    this.setState(() => ({
      [name]: text
    }))
  }

  handleSubmit = e => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { handleAddQuestion } = this.props

    handleAddQuestion(optionOneText, optionTwoText)

    this.setState(() => ({
      toHome: true
    }))
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/unanswered' />
    }

    return (
      <form className='addQuestionForm' onSubmit={this.handleSubmit}>
        <textarea
          name='optionOneText'
          rows='5'
          maxLength='100'
          placeholder='Option one'
          tabIndex='1'
          required
          value={optionOneText}
          onChange={this.handleChange}/>
        <textarea
          name='optionTwoText'
          rows='5'
          maxLength='100'
          placeholder='Option two'
          tabIndex='2'
          required
          value={optionTwoText}
          onChange={this.handleChange}
        />
        <Button type='submit' value='Submit' variant="contained" color="primary" style={{margin:'20px'}}>Submit</Button>
      </form>
    )
  }
}

export default AddQuestionForm
