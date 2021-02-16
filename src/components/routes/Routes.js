import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
import Homepage from './Homepage'

function Routes() {
  return (
    <div>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Redirect to="/" />    
    </Switch>
    </div>
  )
}

export default Routes
