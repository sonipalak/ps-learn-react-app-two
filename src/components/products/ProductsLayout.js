import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

export default class ProductsLayout extends Component {
  pageLimit="6"
  render() {
    return (
      <>
        <section className='product-article'>
          <Row>
            <Col xs={12} md={3}>
              <ProductFilter />
            </Col>
            <Col xs={12} md={9}>
              <ProductList pageLimit={this.pageLimit} />
            </Col>
          </Row>
        </section>
      </>
    )
  }
}
