import React, { Component } from 'react'
import ProductItem from './ProductItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ProductList extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
  }
  async componentDidMount(){
    let url = `https://dummyjson.com/products?limit=8`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      products: parsedData.products
    })
  }
  render() {
    return (
      <>
        <Row>
          <Col>
            <h1>Products</h1>
          </Col>
        </Row>
        <Row>
          {this.state.products.map((element) => {
            return <Col className='mb-4' xs={12} md={6} key={element.id}>
              <ProductItem
                thumbnail={element.thumbnail}
                title={element.title}
                description={element.description}
                price={element.price}
                discountPercentage={element.discountPercentage}
                brand={element.brand}
                category={element.category}
              />
            </Col>
          })}

        </Row>
      </>
    )
  }
}
