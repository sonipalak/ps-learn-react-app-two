import React, { Component } from 'react'
import NewsList from './news/NewsList'

export default class Home extends Component {
  render() {
    return (
      <div>
      <h2>Home</h2>

      <div>
        <h2>Latest Products</h2>
      </div>

      <div>
        <h2>Latest News</h2>
        <NewsList key="general" pageSize="3" country="us" category="general" />
      </div>
    </div>
    )
  }
}
