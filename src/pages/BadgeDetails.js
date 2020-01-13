import React from 'react'
import ReactDOM from 'react-dom'

import { Link } from 'react-router-dom'
import Badge from '../components/BadgeCard';
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'

export default function BadgeDetails (props) {
  const badge = props.badge
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
                {/* onClick={this.openModal} */ }
                { ReactDOM.createPortal(
                  <h1>Este es el contenido del modal</h1>,
                  document.getElementById('modal')) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
