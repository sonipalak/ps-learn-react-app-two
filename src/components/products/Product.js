import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import ProductsLayout from './ProductsLayout';

export default class Product extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<ProductsLayout />} />
        </Routes>
      </div>
    )
  }
}
