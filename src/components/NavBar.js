import React, { Component } from 'react'
import './styles/Navbar.css'
import logo from '../images/logo.svg'

export default class NavBar extends Component {
  render () {
    return (
      <div className="Navbar">
        {/* <h2>NavBar</h2> */ }
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={ logo } alt="Logo" />
            <span className="font-weight-light">MyOwn</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    )
  }
}
