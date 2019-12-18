import React from "react";
import Navbar from '../components/NavBar';

function Layout (props) {
  return (
    <React.Fragment>
      <Navbar />
      { props.children }
    </React.Fragment>
  )
}

export default Layout