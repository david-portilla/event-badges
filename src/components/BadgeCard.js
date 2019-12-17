import React, { Component } from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

export default class BadgeCard extends Component {
  render () {
    return (
      <div className="Badge">
        {/* <h1>Badge Card Component</h1> */ }
        <div className="Badge__header">
          <img src={ confLogo } alt="Banner" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar"
            src={ this.props.avatarUrl } alt="Avatar" />
          <h1>{ this.props.firstName } <br />{ this.props.lastName } </h1>
        </div>
        <div className="Badge__section-info">
          <h3> { this.props.jobTitle }</h3>
          <h4> { this.props.twitter }</h4>
        </div>
        <div className="Badge__footer">
          <p>#medellin #co</p>
        </div>
      </div>
    )
  }
}
