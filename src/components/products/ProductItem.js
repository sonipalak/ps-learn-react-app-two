import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {thumbnail, title, description, price, discountPercentage, brand, category} = this.props;
    return (
      <>
        <div className='item-box'>
          <div className='item-img'>
            <img src={thumbnail} alt="" />
          </div>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
              <p>{price}</p>
              <p>{discountPercentage}</p>
            </div>
            <p>{brand}</p>
            <p>{category}</p>
          </div>
        </div>
      </>
    )
  }
}
