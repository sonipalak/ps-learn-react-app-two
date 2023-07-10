import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductsLayout from './ProductsLayout';

const Product =() => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ProductsLayout limit={6} />} />
      </Routes>
    </div>
  )
}
export default Product