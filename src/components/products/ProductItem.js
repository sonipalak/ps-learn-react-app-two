import React from 'react'

const ProductItem = (props) => {
    let {thumbnail, title, description, price, discountPercentage, brand, category} = props;
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
export default ProductItem