import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Badge from '../components/BadgeCard';

import api from '../api'
import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

export default class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render () {
    if (this.state.loading === true) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={ this.state.error } />
    }

    const badge = this.state.data

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <img src={ confLogo } alt="Conference logo" />
              </div>
              <div className="col-12 col-md-6 mb-4 BadgeDetails__hero-attendant-name">
                <h1>{ badge.firstName } { badge.lastName }</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={ badge.firstName } lastName={ badge.lastName }
                email={ badge.email } twitter={ badge.twitter } jobTitle={ badge.jobTitle }
              />
            </div>

            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link className="btn btn-primary mb-4" to={ `/badges/${ badge.id }/edit` }> Edit badge </Link>
                </div>
              </div>
              <div>
                <div>
                  <button className="btn btn-danger mb-4"> Delete this badge </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
