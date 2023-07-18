import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch';
import News from './components/news/News';
import Product from "./components/products/Product";
import ProductDetails from "./components/products/ProductDetails";
import Movie from './components/movie/Movie';
import ListPage from './components/demo/ListPage';
import DetailsPage from './components/demo/DetailsPage';

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news/*" element={<News />} />
          <Route path="products/*" element={<Product />} />
          <Route path="details/:id" element={<ProductDetails />} />
          <Route path="Movie/*" element={<Movie />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/list/*" element={<ListPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App