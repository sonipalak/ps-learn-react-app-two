import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductLayout from './ProductLayout';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const Product = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<ProductLayout />}>
                    {/* <Route exact path="/" element={<ProductList Key="general" category="general" />} /> */}
                    <Route exact path="/" element={<ProductList Key="smartphones" category="smartphones" />} />
                    <Route exact path="/laptops" element={<ProductList Key="laptops" category="laptops" />} />
                    <Route exact path="/fragrances" element={<ProductList Key="fragrances" category="fragrances" />} />
                    <Route exact path="/skincare" element={<ProductList Key="skincare" category="skincare" />} />
                    <Route exact path="/groceries" element={<ProductList Key="groceries" category="groceries" />} />
                    <Route exact path="/home-decoration" element={<ProductList Key="home-decoration" category="home-decoration" />} />
                    <Route exact path="/furniture" element={<ProductList Key="furniture" category="furniture" />} />
                    <Route exact path="/tops" element={<ProductList Key="tops" category="tops" />} />
                    <Route exact path="/womens-dresses" element={<ProductList Key="womens-dresses" category="womens-dresses" />} />
                    <Route exact path="/womens-shoes" element={<ProductList Key="womens-shoes" category="womens-shoes" />} />
                    <Route exact path="/mens-shirts" element={<ProductList Key="mens-shirts" category="mens-shirts" />} />
                    <Route exact path="/mens-shoes" element={<ProductList Key="mens-shoes" category="mens-shoes" />} />
                    <Route exact path="/mens-watches" element={<ProductList Key="mens-watches" category="mens-watches" />} />
                    <Route exact path="/womens-watches" element={<ProductList Key="womens-watches" category="womens-watches" />} />
                    <Route exact path="/womens-bags" element={<ProductList Key="womens-bags" category="womens-bags" />} />
                    <Route exact path="/womens-jewellery" element={<ProductList Key="womens-jewellery" category="womens-jewellery" />} />
                    <Route exact path="/sunglasses" element={<ProductList Key="sunglasses" category="sunglasses" />} />
                    <Route exact path="/automotive" element={<ProductList Key="automotive" category="automotive" />} />
                    <Route exact path="/motorcycle" element={<ProductList Key="motorcycle" category="motorcycle" />} />
                    <Route exact path="/lighting" element={<ProductList Key="lighting" category="lighting" />} />
                    <Route exact path="/details/:id" element={<ProductDetails Key="ProductDetails" category="ProductDetails" />} />
                </Route>
            </Routes>
        </div>
    )
}
export default Product