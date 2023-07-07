import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="item-list">
        <Link className='item' to="/">Home</Link>
        <Link className='item' to="/about">About</Link>
        <Link className='item' to="/products">Products</Link>
        <Link className='item' to="/news/">News</Link>
        <Link className='item' to="/dashboard">Dashboard</Link>
        <Link className='item' to="/nothing-here">Nothing Here</Link>
      </Nav>
    )
  }
}
