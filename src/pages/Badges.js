import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgestList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api'

export default class Badges extends Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount () {
    this.fetchData()
    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    try {
      const data = await api.badges.list()
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render () {
    if (this.state.loading === true && !this.state.data) {
      // return 'Loading...'
      return <PageLoading />
    }

    if (this.state.error) {
      // return `Error: ${this.state.error.message}`
      return <PageError error={ this.state.error } />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={ confLogo } alt="Conf logo" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">Add new badges </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgestList badgesData={ this.state.data } />
            </div>
          </div>

          { this.state.loading && <MiniLoader /> }

        </div>
      </React.Fragment>
    )
  }
}
