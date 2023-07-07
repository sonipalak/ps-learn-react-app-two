import React, { Component } from 'react'
import NewsList from './NewsList'
import { Routes, Route } from "react-router-dom";
import NewLayout from './NewLayout'

export default class News extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<NewLayout />}>
          <Route exact path="/" element={<NewsList key="general" pageSize={6} country="in" category="general" />} />
          <Route exact path="/business" element={<NewsList key="business" pageSize={6} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<NewsList key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route exact path="/science" element={<NewsList key="science" pageSize={6} country="in" category="science" />} />
          <Route exact path="/health" element={<NewsList key="health" pageSize={6} country="in" category="health" />} />
          <Route exact path="/sports" element={<NewsList key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path="/technology" element={<NewsList key="technology" pageSize={6} country="in" category="technology" />} />
        </Route>
      </Routes>
      </div>
    )
  }
}
