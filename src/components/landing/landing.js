import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const Landing = () => {

  return (
    <div>
      <hr />
      <p>Menu</p>
      <Nav vertical>
        <NavItem>
          <NavLink to='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/cars-list'>Car Inventory</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/locations-list'>Locations</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/add-new-car'>Add Car</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  )
}

export default Landing