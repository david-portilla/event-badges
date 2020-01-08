import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

export default class BadgesList extends Component {
  render () {
    // if there is no badges
    if (this.props.badgesData !== undefined
      && this.props.badgesData.length === 0) {
      return (
        <div>
          <h3>No badges were found!</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      )
    }
    // if there are available badges
    if (this.props.badgesData !== undefined) {
      return (
        <div className="BadgesList">
          <ul className="list-unstyled">
            { this.props.badgesData.map((badge) => {
              return (
                <li key={ badge.id }>
                  <div className="BadgesListItem">
                    <Gravatar
                      className="BadgesListItem__avatar"
                      email={ badge.email }
                    />
                    <div>
                      <strong> { badge.firstName } { badge.lastName }</strong>
                      <p>@{ badge.twitter }</p>
                      <p>{ badge.jobTitle }</p>
                    </div>
                  </div>
                </li>
              )
            }) }
          </ul>
        </div>
      )
    }
    // if list() is empty
    return (
      <div>empty call </div>
    )
  }
}
