import React, { Component } from 'react'

export default class NewsItem extends Component {
    
    
  render() {
    let {title, description, category, price, disPrice, rating, stock, brand} = this.props;
    return (
      <div className='item-box'>
        <h2 className='head'>{title}</h2>
        <p className='description'>{description}</p>
        <div className='subitems'>
          <p className='category'><strong>category:</strong> {category}</p>
          <p className='price'><strong>price:</strong> {price}</p>
          <p className='disPrice'><strong>disPrice:</strong> {disPrice}</p>
          <p className='rating'><strong>rating:</strong> {rating}</p>
          <p className='stock'><strong>stock:</strong> {stock}</p>
          <p className='brand'><strong>brand:</strong> {brand}</p>
        </div>
      </div>
    )
  }
}
