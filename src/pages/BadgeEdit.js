import React, { Component } from 'react'
import BadgeCard from '../components/BadgeCard';
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading';

export default class BadgeEdit extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '@',
      avatarUrl: ''
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({ loading: false, form: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
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

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ loading: true, error: null })

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({ loading: false })
      // on succes send used to badges list
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render () {
    if (this.state.loading === true) {
      return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={ header } alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <BadgeCard
                firstName={ this.state.form.firstName || 'First Name' }
                lastName={ this.state.form.lastName || 'Last Name' }
                email={ this.state.form.email || 'Email' }
                twitter={ this.state.form.twitter || 'Twitter account' }
                jobTitle={ this.state.form.jobTitle || 'Job title' }
                avatarUrl='https://avatars3.githubusercontent.com/u/5439187?s=400&v=4'
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit }
                formValues={ this.state.form }
                error={ this.state.error }
              />
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}
