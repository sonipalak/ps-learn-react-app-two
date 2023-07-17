import React, {useState, useEffect} from "react";
import ProductItem from './ProductItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ProductList = () => {
    const [products, setProducts] = useState([])

  const getProduct = async () => {
    let url = `https://dummyjson.com/products?limit=8`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setProducts(parsedData.products)
  }
  useEffect(() => {
    getProduct();
  }, [])
    return(
        <div>
            <Row>
        {products.map((element) => {
          return <Col className='mb-4' xs={12} md={6} key={element.id}>
            <ProductItem
              thumbnail={element.thumbnail}
              title={element.title}
              description={element.description}
              price={element.price}
              discountPercentage={element.discountPercentage}
              brand={element.brand}
              category={element.category}
              id={element.id}
            />
          </Col>
        })}

      </Row>
        </div>
    )
}
export default ProductList;