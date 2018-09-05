import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'


class SignUp extends Component {
  state = {
    name: '',
    id: '',
    avatarURL: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    const { id, name, avatarURL } = this.state
    const { onRegister } = this.props

    onRegister(id, name, avatarURL)
  }

  handleChange = e => {
    const text = e.target.value
    const name = e.target.name
    this.setState(() => ({
      [name]: text
    }))
  }

  render() {
    const { id, name, avatarURL } = this.state

    return (
      <form onSubmit={this.handleSubmit} className='registerForm'>
        <div className='registerLabels'>
          <Input
             id="name"
             placeholder="User Name"
             name='name'
             type='text'
             value={name}
             onChange={this.handleChange}
           />

           <Input
             placeholder="Avatar URL"
             value={avatarURL}
             onChange={this.handleChange}
             name='avatarURL'
             type='text'
           />

           <Input
             value={id}
              id="name"
              placeholder="User ID"
              name='id'
              type='text'
              onChange={this.handleChange}
            />

        </div>
        <div>
        </div>
        <Button variant="outlined" color="primary" type='submit' value='Register' style={{margin:"20px"}}>
          Register
      </Button>
      </form>
    )
  }
}

export default SignUp
