import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default class NewLayout extends Component {
  render() {
    return (
      <>
            <div className='news-head'>
                <h1>News</h1>
                <div className='link-items'>
                    <Link className='item' to="/news/general">general</Link>
                    <Link className='item' to="/news/business">business</Link>
                    <Link className='item' to="/news/entertainment">entertainment</Link>
                    <Link className='item' to="/news/science">science</Link>
                    <Link className='item' to="/news/health">health</Link>
                    <Link className='item' to="/news/sports">sports</Link>
                    <Link className='item' to="/news/technology">technology</Link>
                </div>
            </div>
        <Outlet />
      </>
    )
  }
}
