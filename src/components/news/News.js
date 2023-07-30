import React from 'react'
import NewsList from './NewsList'
import { Routes, Route } from "react-router-dom";
import NewLayout from './NewLayout'

const News = () => {
  const pageSize = 6
  const country = "us"
  //apikey= process.env.REACT_APP_NEWS_API
  const apikey="b9d2e5a3b7ae4c3f97da7aa735015c83"
    return (
      <>
        <Routes>
          <Route exact path="/" element={<NewLayout />}>
            <Route exact path="/" element={<NewsList key="general" pageSize={pageSize} apikey={apikey} country={country} category="general" />} />
            <Route exact path="/business" element={<NewsList key="business" pageSize={pageSize} apikey={apikey} country={country} category="business" />} />
            <Route exact path="/entertainment" element={<NewsList key="entertainment" pageSize={pageSize} apikey={apikey} country={country} category="entertainment" />} />
            <Route exact path="/science" element={<NewsList key="science" pageSize={pageSize} apikey={apikey} country={country} category="science" />} />
            <Route exact path="/health" element={<NewsList key="health" pageSize={pageSize} apikey={apikey} country={country} category="health" />} />
            <Route exact path="/sports" element={<NewsList key="sports" pageSize={pageSize} apikey={apikey} country={country} category="sports" />} />
            <Route exact path="/technology" element={<NewsList key="technology" pageSize={pageSize} apikey={apikey} country={country} category="technology" />} />
          </Route>
        </Routes>
      </>
    )
}
export default News