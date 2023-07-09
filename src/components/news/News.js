import React, { Component } from 'react'
import NewsList from './NewsList'
import { Routes, Route } from "react-router-dom";
import NewLayout from './NewLayout'

export default class News extends Component {
  pageSize = 6
  country = "us"
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<NewLayout />}>
          <Route exact path="/" element={<NewsList key="general" pageSize={this.pageSize} country={this.country} category="general" />} />
          <Route exact path="/business" element={<NewsList key="business" pageSize={this.pageSize} country={this.country} category="business" />} />
          <Route exact path="/entertainment" element={<NewsList key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" />} />
          <Route exact path="/science" element={<NewsList key="science" pageSize={this.pageSize} country={this.country} category="science" />} />
          <Route exact path="/health" element={<NewsList key="health" pageSize={this.pageSize} country={this.country} category="health" />} />
          <Route exact path="/sports" element={<NewsList key="sports" pageSize={this.pageSize} country={this.country} category="sports" />} />
          <Route exact path="/technology" element={<NewsList key="technology" pageSize={this.pageSize} country={this.country} category="technology" />} />
        </Route>
      </Routes>
      </div>
    )
  }
}
