import React, { Component } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default class NewLayout extends Component {
  render() {
    return (
      <>
            <div className='news-head'>
                <h1>News</h1>
                <div className='link-items'>
                    <NavLink to="/news/">general</NavLink>
                    <NavLink to="/news/business">business</NavLink>
                    <NavLink to="/news/entertainment">entertainment</NavLink>
                    <NavLink to="/news/science">science</NavLink>
                    <NavLink to="/news/health">health</NavLink>
                    <NavLink to="/news/sports">sports</NavLink>
                    <NavLink to="/news/technology">technology</NavLink>
                </div>
            </div>
        <Outlet />
      </>
    )
  }
}
