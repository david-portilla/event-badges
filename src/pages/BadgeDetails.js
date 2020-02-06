import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/BadgeCard';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

// create a custom Hook
function useIncreaseCoun (max) {
  const [ count, setCount ] = React.useState(0)

  if (count > max) {
    setCount(0)
  }

  return [ count, setCount ]
}

export default function BadgeDetails (props) {
  // use Hook => useState
  // const [ count, setCount ] = React.useState(0)

  // use Custom Hook => useIncreaseCoun
  const [ count, setCount ] = useIncreaseCoun(4)

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
                <button onClick={ () => {
                  setCount(count + 1)
                } } className="btn btn-primary mr-4">
                  Increase count: { count }
                </button>
                <Link className="btn btn-primary mb-4" to={ `/badges/${ badge.id }/edit` }> Edit badge </Link>
              </div>
            </div>
            <div>
              <div>
                <button onClick={ props.onOpenModal } className="btn btn-danger mb-4"> Delete badge </button>
                <DeleteBadgeModal
                  isOpen={ props.modalIsOpen }
                  onClose={ props.onCloseModal }
                  onDeleteBadge={ props.onDeleteBadge }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
