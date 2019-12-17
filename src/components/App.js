import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badges from '../pages/Badges'
import BadgePage from '../pages/BadgePage'

export default function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/badges" component={ Badges } />
          <Route exact path="/badges/new" component={ BadgePage } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
