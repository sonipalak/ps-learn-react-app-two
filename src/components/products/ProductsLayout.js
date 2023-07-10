import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

const ProductsLayout = () => {
  return (
    <>
      <section className='product-article'>
        <Row>
          <Col xs={12} md={3}>
            <ProductFilter />
          </Col>
          <Col xs={12} md={9}>
            <ProductList />
          </Col>
        </Row>
      </section>
    </>
  )
}
export default ProductsLayout