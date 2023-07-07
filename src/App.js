import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import NewsIndex from './components/news/NewsIndex'
import Product from './components/products/Product'

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">news</Link>
            </li>
            <li>
              <Link to="/product">product</Link>
            </li>
          </ul>
        </nav>
          <Switch>
            <Route exact path="/"><NewsIndex /></Route>
            <Route exact path="/product"><Product /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}
