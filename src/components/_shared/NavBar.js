import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends Component {
  render() {
    
    return (
      <Nav className="item-list">
        <NavLink className='item' to="/">Home</NavLink>
        <NavLink className='item' to="/about">About</NavLink>
        <NavLink className='item' to="/products">Products</NavLink>
        <NavLink className='item' to="/news/">News</NavLink>
        <NavLink className='item' to="/dashboard">Dashboard</NavLink>
        <NavLink className='item' to="/nothing-here">Nothing Here</NavLink>
      </Nav>
    )
  }
}
