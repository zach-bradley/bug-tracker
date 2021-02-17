import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavbarBrand, NavItem} from 'reactstrap';
import './Navigation.css'

function Navigation() {
  return (
    <div className="Navigation">
      <Navbar>
        <NavbarBrand href="/" className="Navigation-Brand">BugTracker</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
        </Nav>  
      </Navbar>
      <hr/>
    </div>
  )
}

export default Navigation
