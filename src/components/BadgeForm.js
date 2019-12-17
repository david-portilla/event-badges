import React, { Component } from 'react'

export default class BadgeForm extends Component {
  state = {
    firstName: 'David',
    lastName: 'Portilla'
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [ e.target.name ]: e.target.value
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.formValues)
  }

  render () {
    return (
      <div>
        <h1>New attendant form</h1>
        <form>
          <div className="form-group">
            <label>First name</label>
            <input onChange={ this.props.onChange } className="form-control" type="text"
              name="firstName" value={ this.props.formValues.firstName } />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input onChange={ this.props.onChange } className="form-control" type="text"
              name="lastName" value={ this.props.formValues.lastName } />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input onChange={ this.props.onChange } className="form-control" type="email"
              name="email" value={ this.props.formValues.email } />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input onChange={ this.props.onChange } className="form-control" type="text"
              name="jobTitle" value={ this.props.formValues.jobTitle } />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input onChange={ this.props.onChange } className="form-control" type="text"
              name="twitter" value={ this.props.formValues.twitter } />
          </div>
          <button onClick={ this.handleSubmit } className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}
