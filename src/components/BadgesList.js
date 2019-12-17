import React, { Component } from 'react'
import './styles/BadgesList.css';


export default class BadgesList extends Component {
  render () {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          { this.props.badgesData.map((badge) => {
            return (
              <li key={ badge.id }>
                <div className="BadgesListItem">
                  <img
                    className="BadgesListItem__avatar"
                    src={ badge.avatarUrl }
                    alt={ ` ${ badge.firstName } ${ badge.lastName }` } />
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
}
