import React from 'react'
import '../pages/styles/HomePage.css'
import platziconfLogoImage from '../images/platziconf-logo.svg'
import astronautsImage from '../images/astronauts.svg'
import { Link } from 'react-router-dom'

export default function HomePage () {
  return (
    <>
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={ platziconfLogoImage }
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Print your badges</h1>
              <p>The easiest way to manage your conference</p>
              <Link className="btn btn-primary" to="/badges">
                Start Now
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={ astronautsImage }
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
