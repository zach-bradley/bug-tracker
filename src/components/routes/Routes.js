import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
import Homepage from './Homepage';
import BugResolve from './BugResolve';
import UserPage from './UserPage';

function Routes() {
  return (
    <div>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/bugs/:id">
        <BugResolve />
      </Route>
      <Route exact path="/profile">
        <UserPage />
      </Route>
      <Redirect to="/" />    
    </Switch>
    </div>
  )
}

export default Routes
