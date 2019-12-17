import React, { Component } from 'react'
import Navbar from '../components/NavBar';
import BadgeCard from '../components/BadgeCard';
import BadgeForm from '../components/BadgeForm'
import './styles/BadgePage.css'
import header from '../images/badge-header.svg'

export default class BadgePage extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '@',
      avatarUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [ e.target.name ]: e.target.value
      }
    })
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className="BadgePage__hero">
          <img className="img-fluid" src={ header } alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <BadgeCard
                firstName={ this.state.form.firstName }
                lastName={ this.state.form.lastName }
                email={ this.state.form.email }
                twitter={ this.state.form.twitter }
                jobTitle={ this.state.form.jobTitle }
                avatarUrl='https://avatars3.githubusercontent.com/u/5439187?s=400&v=4'
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={ this.handleChange } formValues={ this.state.form } />
            </div>
          </div>

        </div>
      </div>
    )
  }
}
