import React, { Component } from 'react'
import './styles/Navbar.css'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render () {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={ logo } alt="Logo" />
            <span className="font-weight-light">MyOwn</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    )
  }
}
