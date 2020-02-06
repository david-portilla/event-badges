import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

function useSearchBadges (badges) {
  const [ query, setQuery ] = React.useState('')
  const [ filteredBadges, setFilteredBadges ] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${ badge.firstName } ${ badge.lastName }`
        .toLowerCase()
        .includes(query.toLowerCase());
    })
    setFilteredBadges(result)
  }, [ badges, query ])

  return { query, setQuery, filteredBadges }
}

function BadgesList (props) {
  const badges = props.badgesData
  const { query, setQuery, filteredBadges } = useSearchBadges(badges)


  // if there is no badges
  if (filteredBadges !== undefined
    && filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={ query }
            onChange={ (e) => {
              setQuery(e.target.value)
            } }
          />
        </div>
        <h3>No badges were found!</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create New Badge
          </Link>
      </div>
    )
  }
  // if there are available badges
  if (filteredBadges !== undefined) {
    return (
      <div className="BadgesList">

        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={ query }
            onChange={ (e) => {
              setQuery(e.target.value)
            } }
          />
        </div>

        <ul className="list-unstyled">
          { filteredBadges.map((badge) => {
            return (
              <li key={ badge.id }>
                <Link className="text-reset text-decoration-none"
                  to={ `/badges/${ badge.id }` }>
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
                </Link>
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


export default BadgesList