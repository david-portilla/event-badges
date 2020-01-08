import React from 'react'
import '../components/styles/Navbar.css'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <div className="card bg-dark text-center text-white">
              <div className="card-body">
                <img className="Navbar__brand-logo mb-4" src={ logo } alt="Logo" />
                <h2 className="alert-heading">404: Page Not Found</h2>
                <p className="card-text">Hmmmm! It seems this page didn't exist</p>
                <p className="card-text mt-5">Try another URL or</p>
                <Link className="btn btn-primary" to="/">
                  <span className="font-weight-light">Go back to </span>
                  <span className="font-weight-bold">Homepage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
