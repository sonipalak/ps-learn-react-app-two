import React from "react";
import { Outlet } from 'react-router-dom'
import ProductFilter from "./ProductFilter";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductLayout = () => {
    return (
        <>
            <section className='news-head'>
                <h1>Products</h1>
            </section>
            <section className=''>
                <Row>
                    <Col xs={12} md={3}>
                        <ProductFilter />
                    </Col>
                    <Col xs={12} md={9}>
                        <Outlet />
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default ProductLayout;