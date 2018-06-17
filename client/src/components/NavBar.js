import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const NavBar = ({ history }) => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    {' '}
  </nav>
)

export default withRouter(NavBar)

