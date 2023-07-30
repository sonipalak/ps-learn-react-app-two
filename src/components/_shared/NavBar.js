import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
    <Nav className="item-list">
      <NavLink className='item' to="/">Home</NavLink>
      <NavLink className='item' to="/about">About</NavLink>
      <NavLink className='item' to="/list/">List</NavLink>
      <NavLink className='item' to="/movie">Movie</NavLink>
      {/* <NavLink className='item' to="/products/">Products</NavLink> */}
      <NavLink className='item' to="/news/">News</NavLink>
      <NavLink className='item' to="/dashboard">Dashboard</NavLink>
    </Nav>
  )
}
export default NavBar